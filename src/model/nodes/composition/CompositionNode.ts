import IMetaDiagramConverter from '../IMetaDiagramConverter';

export default class CompositionNode extends IMetaDiagramConverter {
    constructor() {
        super();
    }

    getMetaDiagram() {
        console.log("just a test");
    }
}