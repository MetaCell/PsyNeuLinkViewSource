import IMetaDiagramConverter from '../IMetaDiagramConverter';

export default class MechanismNode extends IMetaDiagramConverter {
    constructor({
        name = null,
    }) {
        super();
    }

    getMetaDiagram() {
        console.log("just a test");
    }
}