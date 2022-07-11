// import MetaLink from 'meta-diagram';
import IMetaLinkConverter from './IMetaLinkConverter';

export default class ProjectionLink implements IMetaLinkConverter {
    name: String;
    sender: String;
    senderPort: String;
    receiver: String;
    receiverPort: String;
    extra: Object;
    isExpanded: Boolean;

    constructor(name: String, sender: String, senderPort: String, receiver: String, receiverPort: String, isExpanded?: Boolean, extra?: Object) {
        this.name = name;
        this.sender = sender;
        this.senderPort = senderPort;
        this.receiver = receiver;
        this.receiverPort = receiverPort;
        this.extra = extra !== undefined ? extra : {};
        this.isExpanded = isExpanded !== undefined ? isExpanded : false;
    }

    getName() : String {
        return this.name;
    }

    setExpanded(expandedState: Boolean) {
        this.isExpanded = expandedState !== undefined ? expandedState : !this.isExpanded;
    }

    getExpanded() : Boolean {
        return this.isExpanded;
    }

    onMaximise() : any {
        console.log('onMaximise do something.');
    }

    getSender(): String {
        return this.sender;
    }

    getSenderPort(): String {
        return this.senderPort;
    }

    getReceiver(): String {
        return this.receiver;
    }

    getReceiverPort(): String {
        return this.receiverPort;
    }

    getMetaLink() : any {
        console.log("Projection Node implementation of getMetaLink.");
    }
}