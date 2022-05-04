from abc import ABC, abstractmethod


class IPythonInstructionCreator(ABC):

    @abstractmethod
    def get_instruction_string(self, params) -> str:
        pass
