export const getProcessingMechanismParams = (id, name, func, slope) => {
    return {
        apiMethod: id,
        params: [
            {
                key: 'name',
                value: name,
                // Todo: Try to use graph.proto enum (check rpc.js this.graph_proto)
                type: 0
            },
            {
                key: "function",
                value: func,
                type: 0
            },
            {
                key: "function.slope",
                value: slope,
                type: 1
            }
        ]

    }
}
