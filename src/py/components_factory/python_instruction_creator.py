from abc import ABC, abstractmethod
from psyneulink.core.rpc import graph_pb2


class IPythonInstructionCreator(ABC):

    @abstractmethod
    def get_instruction_string(self, params: graph_pb2.ComponentParams) -> str:
        pass
