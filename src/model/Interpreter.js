var parse = require('dotparser');


export default class ModelInterpreter {
    constructor(model) {
        this.nativeModel = model;
        this.jsonModel = this.convertModel(model);
    }

    async convertModel(model) {
        const parsedModel = {
            'compositions': [],
            'mechanisms': [],
        };

        parsedModel.compositions = model.compositions.map(singleModel => {
            let newModel = parse(singleModel);
            return newModel;
        });

        parsedModel.mechanisms = model.mechanisms.map(singleNode => {
            let newNode = parse(singleNode);
            return newNode;
        });

        return parsedModel;
    }
}