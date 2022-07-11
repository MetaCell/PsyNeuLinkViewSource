// import MetaDiagram from 'meta-diagram';
import PortNode from '../PortNode';
import IMetaDiagramConverter from '../IMetaDiagramConverter';

export default class MechanismNode implements IMetaDiagramConverter {
    name: String;
    icon: String;
    isExpanded: Boolean;
    ports: Array<PortNode>;
    extra: Object;

    constructor(name: string, icon?: string, isExpaded?: boolean, ports?: Array<PortNode>, extra?: Object) {
        this.name = name;
        this.icon = icon !== undefined ? icon : "";
        this.ports = ports !== undefined ? ports : [];
        this.extra = extra !== undefined ? extra : [];
        this.isExpanded = isExpaded !== undefined ? isExpaded : false;
    }

    getName() : String {
        return this.name;
    }

    setIcon(path: String) {
        this.icon = path !== undefined ? path : this.icon;
    }


    getIcon() : String{
        return this.icon;
    }

    setExpanded(expandedState: Boolean) {
        this.isExpanded = expandedState !== undefined ? expandedState : !this.isExpanded;
    }

    getExpanded() : Boolean {
        return this.isExpanded;
    }

    addPort(singlePort: any) {
        this.ports.push(new PortNode(singlePort.id, singlePort.name, singlePort.role));
    }

    deletePort(portId: String) {
        this.ports = this.ports.filter(port => port.id !== portId);
    }

    getPorts() : Array<PortNode> {
        return this.ports;
    }

    getMetaDiagram() : any{
        console.log("Mechanism Node implementation of getMetaDiagram.");
    }
}