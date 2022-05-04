export const getProcessingMechanismParams = (id, name, func) => {
    return {
        apiMethod: id,
        params: [
            {
                key: 'name',
                value: name,
                type: 0
            },
            {
                key: "function",
                value: func,
                type: 0
            },
            {
                key: "function.slope",
                value: 2,
                type: 1
            }
        ]

    }
}
