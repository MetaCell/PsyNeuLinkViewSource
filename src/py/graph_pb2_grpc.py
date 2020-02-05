# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import graph_pb2 as graph__pb2


class ServeGraphStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.LoadCustomPnl = channel.unary_unary(
        '/graph.ServeGraph/LoadCustomPnl',
        request_serializer=graph__pb2.PNLPath.SerializeToString,
        response_deserializer=graph__pb2.NullArgument.FromString,
        )
    self.LoadScript = channel.unary_unary(
        '/graph.ServeGraph/LoadScript',
        request_serializer=graph__pb2.ScriptPath.SerializeToString,
        response_deserializer=graph__pb2.ScriptCompositions.FromString,
        )
    self.LoadGraphics = channel.unary_unary(
        '/graph.ServeGraph/LoadGraphics',
        request_serializer=graph__pb2.ScriptPath.SerializeToString,
        response_deserializer=graph__pb2.StyleJSON.FromString,
        )
    self.GetCompositions = channel.unary_unary(
        '/graph.ServeGraph/GetCompositions',
        request_serializer=graph__pb2.NullArgument.SerializeToString,
        response_deserializer=graph__pb2.ScriptCompositions.FromString,
        )
    self.GetJSON = channel.unary_unary(
        '/graph.ServeGraph/GetJSON',
        request_serializer=graph__pb2.GraphName.SerializeToString,
        response_deserializer=graph__pb2.GraphJSON.FromString,
        )
    self.HealthCheck = channel.unary_unary(
        '/graph.ServeGraph/HealthCheck',
        request_serializer=graph__pb2.NullArgument.SerializeToString,
        response_deserializer=graph__pb2.HealthStatus.FromString,
        )
    self.UpdateStylesheet = channel.unary_unary(
        '/graph.ServeGraph/UpdateStylesheet',
        request_serializer=graph__pb2.StyleJSON.SerializeToString,
        response_deserializer=graph__pb2.NullArgument.FromString,
        )


class ServeGraphServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def LoadCustomPnl(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def LoadScript(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def LoadGraphics(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetCompositions(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def GetJSON(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def HealthCheck(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')

  def UpdateStylesheet(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_ServeGraphServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'LoadCustomPnl': grpc.unary_unary_rpc_method_handler(
          servicer.LoadCustomPnl,
          request_deserializer=graph__pb2.PNLPath.FromString,
          response_serializer=graph__pb2.NullArgument.SerializeToString,
      ),
      'LoadScript': grpc.unary_unary_rpc_method_handler(
          servicer.LoadScript,
          request_deserializer=graph__pb2.ScriptPath.FromString,
          response_serializer=graph__pb2.ScriptCompositions.SerializeToString,
      ),
      'LoadGraphics': grpc.unary_unary_rpc_method_handler(
          servicer.LoadGraphics,
          request_deserializer=graph__pb2.ScriptPath.FromString,
          response_serializer=graph__pb2.StyleJSON.SerializeToString,
      ),
      'GetCompositions': grpc.unary_unary_rpc_method_handler(
          servicer.GetCompositions,
          request_deserializer=graph__pb2.NullArgument.FromString,
          response_serializer=graph__pb2.ScriptCompositions.SerializeToString,
      ),
      'GetJSON': grpc.unary_unary_rpc_method_handler(
          servicer.GetJSON,
          request_deserializer=graph__pb2.GraphName.FromString,
          response_serializer=graph__pb2.GraphJSON.SerializeToString,
      ),
      'HealthCheck': grpc.unary_unary_rpc_method_handler(
          servicer.HealthCheck,
          request_deserializer=graph__pb2.NullArgument.FromString,
          response_serializer=graph__pb2.HealthStatus.SerializeToString,
      ),
      'UpdateStylesheet': grpc.unary_unary_rpc_method_handler(
          servicer.UpdateStylesheet,
          request_deserializer=graph__pb2.StyleJSON.FromString,
          response_serializer=graph__pb2.NullArgument.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'graph.ServeGraph', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))
