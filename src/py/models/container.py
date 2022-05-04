from queue import Queue
import threading
import psyneulink as pnl


class Container:
    def __init__(self):
        self.pnl_objects = {
            'compositions': {},
            'components': {}
        }
        self.graphics_spec = {}
        self.filepath = None
        self.AST = None
        self.shared_queue = Queue()
        self.shared_queue_lock = threading.RLock()

    @property
    def hashable_pnl_objects(self):
        return {
            'compositions': [i for i in self.pnl_objects['compositions']],
            'components': [i for i in self.pnl_objects['components']]
        }

    def add_new_instruction(self, instruction, namespace):
        self.AST = "".join([self.AST, '\n', instruction])
        self.update(namespace)

    def update(self, namespace):
        if 'pnlv_graphics_spec' in namespace:
            self.graphics_spec = namespace['pnlv_graphics_spec']
        compositions = {}
        for cat in pnl.CompositionRegistry:
            for comp_name in pnl.CompositionRegistry[cat][1]:
                compositions.update({comp_name: pnl.CompositionRegistry[cat][1][comp_name]})
        components = {i.name: i for i in namespace.values() if isinstance(i, pnl.Mechanism)}
        self.pnl_objects['compositions'].update(compositions)
        self.pnl_objects['components'].update(components)
