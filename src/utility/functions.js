import proto from "../models/graph_pb"

export const getProcessingMechanismParams = (id, name, func, slope) => {
    return {
        apiMethod: id,
        params: [
            {
                key: 'name',
                value: name,
                type: proto.paramTypes.STRING
            },
            {
                key: "function",
                value: func,
                type: proto.paramTypes.STRING
            },
            {
                key: "function.slope",
                value: slope,
                type: proto.paramTypes.NUMBER
            }
        ]

    }
}
