from psyneulink.core.rpc import graph_pb2
from src.py.components_factory.params_validator import validate_params
from src.py.components_factory.python_instruction_creator import IPythonInstructionCreator
from src.py.helpers import template_to_str


def construct_name_str(params: graph_pb2.ComponentParams):
    for param in params:
        if param.key == 'name':
            return param.value


def construct_function_str(params: graph_pb2.ComponentParams):
    function = next(p for p in params if p.key == 'function')
    if not function:
        return None
    res = [function.value, '(']
    nested_function_params = [param for param in params if param.key.startswith('function.')]
    for idx, nfp in enumerate(nested_function_params):
        arg = nfp.key.split('.')[1]
        res.extend([arg, '=', nfp.value])
        if idx != len(nested_function_params) - 1:
            res.append(',')
    res.append(')')
    return "".join(res)


class ProcessingMechanismCreator(IPythonInstructionCreator):
    allowed_params = {
        'name': {
            'required': True
        },
        'function': {
            'required': False,
            'allowed_values': {'Identity', 'Linear', 'Exponential', 'Logistic', 'Tanh', 'ReLU', 'Angle', 'Gaussian',
                               'GaussianDistort', 'SoftMax', 'LinearMatrix', 'TransferWithCosts'}
        },
    }

    str_template = "{name} = pnl.ProcessingMechanism(name='{name}', function=pnl.{function})"

    action_map = {
        'name': construct_name_str,
        'function': construct_function_str
    }

    def get_instruction_string(self, params: graph_pb2.ComponentParams) -> str:
        validate_params(ProcessingMechanismCreator.allowed_params, params)
        provided_params = set([param.key for param in params if '.' not in param.key])
        template_values = {pp: ProcessingMechanismCreator.action_map[pp](params) for pp in provided_params}
        return template_to_str(ProcessingMechanismCreator.str_template, template_values)
