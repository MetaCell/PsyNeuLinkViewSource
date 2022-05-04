from src.py.components_factory.processing_mechanism_creator import ProcessingMechanismCreator
from src.py.components_factory.python_instruction_creator import IPythonInstructionCreator

CREATOR_MAPPER = {
    'ProcessingMechanism': ProcessingMechanismCreator()
}


def get_concrete_creator(api_method: str) -> IPythonInstructionCreator:
    return CREATOR_MAPPER[api_method]
