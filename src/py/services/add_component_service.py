from src.py.ast_parse import DependencyGraph
from src.py.components_factory.concrete_creator_factory import get_concrete_creator
from src.py.exceptions.custom_exceptions import ParamValueNotAllowedError, RequiredParamsMissingError, \
    ParamAttributesMissingError
from src.py.models.container import Container


def add_component(instruction: str, dg: DependencyGraph, model: Container):
    node = dg.add_new_instruction(instruction)
    dg.execute_node(node)
    model.add_new_instruction(instruction, dg.get_namespace())


def get_instruction(api_method: str, params, ):
    try:
        concrete_creator = get_concrete_creator(api_method)
    except KeyError:
        # TODO: Handle unknown component id
        return
    try:
        return concrete_creator.get_instruction_string(params)
    except (ParamValueNotAllowedError, RequiredParamsMissingError, ParamAttributesMissingError):
        # TODO: Handle bad request
        return
