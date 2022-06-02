const rpcClient = window.interfaces.rpc;

export const addComponent = (params, callback) => {
    rpcClient.add_component(params, callback)
}