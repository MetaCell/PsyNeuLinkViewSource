import re
from redbaron import RedBaron


def print_to_file(text):
    with open("/tmp/debug_out.txt", 'a') as f:
        f.write(str(text) + "\n")
        f.flush()


def check_list_node_for_types(list_node, acceptable_types):
    types = set(acceptable_types)
    for i in list_node.value:
        if not i.type in types:
            return False
    return True


class DependencyGraph:
    def __init__(self, src, psyneulink_instance):
        self.psyneulink_instance = psyneulink_instance
        self.psyneulink_composition_classes = self.get_class_hierarchy(self.psyneulink_instance.Composition)
        self.psyneulink_mechanism_classes = self.get_class_hierarchy(self.psyneulink_instance.Mechanism)
        self.psyneulink_projection_classes = self.get_class_hierarchy(self.psyneulink_instance.Projection)
        self.psyneulink_function_classes = self.get_class_hierarchy(self.psyneulink_instance.Function)
        self.psyneulink_composition_manipulation_methods = [
            'add_node',
            'add_nodes',
            'add_projection',
            'add_projections',
            'add_pathway',
            'add_linear_processing_pathway',
            'add_linear_learning_pathway',
            'add_reinforcement_learning_pathway',
            'add_td_learning_pathway',
            'add_backpropagation_learning_pathway',
            'add_controller',
            'add_required_node_role'
        ]
        self.psyneulink_calls = \
            self.psyneulink_composition_classes + \
            self.psyneulink_mechanism_classes + \
            self.psyneulink_projection_classes + \
            self.psyneulink_function_classes + \
            self.psyneulink_composition_manipulation_methods
        self.index = {}
        self.fst = RedBaron(src)
        self.all_assigns = self.fst.find_all('assign', recursive=False)
        self.all_assigns_dict = {}
        for i in self.all_assigns:
            if i.name.value not in self.all_assigns_dict:
                self.all_assigns_dict[i.name.value] = []
            self.all_assigns_dict[i.name.value].append(i)
        self.src_executed = ''
        self.namespace = {}

    def get_class_hierarchy(self, root_class, class_hierarchy=None):
        if class_hierarchy is None:
            class_hierarchy = [root_class.__name__]
        subclasses = root_class.__subclasses__()
        if subclasses:
            class_hierarchy.extend([i.__name__ for i in subclasses])
            for subclass in subclasses:
                self.get_class_hierarchy(subclass, class_hierarchy=class_hierarchy)
        return class_hierarchy

    def execute_node(self, node):
        try:
            if not node in self.index:
                self.index[node] = {'executed': False}
            if not self.index[node]['executed']:
                exec(node.dumps(), self.namespace)
                self.index[node]['executed'] = True
                self.src_executed += node.dumps() + '\n'
        except NameError as err:
            var_name = re.search(r"(?<=').*(?=')", err.args[0]).group()
            if var_name in self.all_assigns_dict:
                for dependency in self.all_assigns_dict[var_name]:
                    if dependency.absolute_bounding_box.top_left.line < node.absolute_bounding_box.top_left.line:
                        self.execute_node(dependency)
                    else:
                        assert True
            else:
                assignment_deep_search = self.all_assigns.find("name", var_name)
                if assignment_deep_search:
                    self.execute_node(assignment_deep_search.parent)
            self.execute_node(node)

    def execute_ast(self):
        for i in self.fst:
            if i.find(['import', 'from_import', 'dotted_as_name', 'name_as_name']):
                self.execute_node(i)
            elif i.find('def'):
                if i.find('name', self.psyneulink_calls):
                    self.psyneulink_calls.append(i.name)
                self.execute_node(i)
            elif i.find('assign') or i.find('call'):
                acceptable_types = ['int', 'float', 'binary',
                                    'string', 'raw_string',
                                    'binary_string', 'string_chain']
                if hasattr(i.value, "type") and i.value.type in acceptable_types or \
                        hasattr(i.value, "type") and i.value.type == 'list' and \
                        check_list_node_for_types(i, acceptable_types) or \
                        i.find('name', self.psyneulink_calls):
                    self.execute_node(i)
            elif i.find('call'):
                if i.find('name', self.psyneulink_calls):
                    self.execute_node(i)
        gdict = self.fst.find('assign', lambda x: x.find('name', 'pnlv_graphics_spec'))
        if gdict:
            self.execute_node(gdict)
        else:
            self.namespace['pnlv_graphics_spec'] = {}

    def add_new_instruction(self, instruction):
        self.fst.extend([instruction])
        new_instruction = self.fst[len(self.fst.data)-1]
        if new_instruction.type == "assignment":
            self.all_assigns.extend([new_instruction])
            if new_instruction.name.value not in self.all_assigns_dict:
                self.all_assigns_dict[new_instruction.name.value] = []
            self.all_assigns_dict[new_instruction.name.value].append(new_instruction)
        return new_instruction

    def get_namespace(self):
        return self.namespace
