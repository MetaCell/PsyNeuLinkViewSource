import MechanismNode from './nodes/mechanism/MechanismNode';
import CompositionNode from './nodes/composition/CompositionNode';
import { PNLTypes } from '../constants';

const html2json = require('html2json').html2json
const typesArray = Object.values(PNLTypes);

export function castObject(item) {
    let newNode = item;
    if (item?.type === undefined) {
        throw new TypeError('type is missing, object cannot be casted to the right class type.');
    }
    switch (item.type) {
        case PNLTypes.COMPOSITION: {
            let extra = {};
            let ports = [];
            let children = []
            item.children.forEach(element => {
                if (element.type === 'attr_stmt') {
                    extra[element.target] = {}
                    element.attr_list.forEach( innerElement => {
                        if (innerElement.type === 'attr') {
                            extra[element.target][innerElement?.id] = innerElement?.eq;
                        }
                    });
                    return;
                }
                if (typesArray.includes(element.type)) {
                    children.push(castObject(element));
                }
            });
            newNode = new CompositionNode(item.id, '', false, ports, extra, children);
            break;
        }
        case PNLTypes.MECHANISM: {
            let ports = [];
            let extra = {};
            item.attr_list.forEach(singleAttr => {
                if (singleAttr.id === 'label') {
                    // TODO: implement the parsing of the json structure generated below
                    // in order to detect ports and other elements of the node.
                    //
                    // parsedHtml = html2json(singleAttr.eq);
                    return;
                }
                if (singleAttr.type === 'attr') {
                    extra[singleAttr?.id] = singleAttr?.eq;
                }
            });
            newNode = new MechanismNode(item?.node_id?.id, '', false, ports, extra);
            break;
        }
        default:
            // TODO: enable this in the future
            // throw new Error(`Casting error, "${item.type}" type not known.`);
            console.log(`Casting error, "${item.type}" type not known.`);
    }
    return newNode;
}