import {addComponent} from "./rpcService";

export const addProcessingMechanism = (params) => {
    addComponent(params,
        (err) => {
            if (err) {
                console.error(err)
            } else {
                console.debug("Add Processing Mechanism")
            }
        })

}