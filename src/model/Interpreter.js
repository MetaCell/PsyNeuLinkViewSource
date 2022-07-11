import { castObject } from './utils';

const parse = require('dotparser');
const html2json = require('html2json').html2json


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

        const castedModel = {
            'compositions': [],
            'mechanisms': [],
        };

        parsedModel.compositions = model.compositions.map(singleModel => {
            const newModel = parse(singleModel).map(elem => castObject(elem));
            return newModel;
        });

        parsedModel.mechanisms = model.mechanisms.map(singleNode => {
            let tempNode = parse(singleNode)[0].children.filter(elem => elem.node_id.id !== 'graph');
            let newNode = tempNode.map(elem => castObject(elem));
            return newNode;
        });

        return parsedModel;
    }
}