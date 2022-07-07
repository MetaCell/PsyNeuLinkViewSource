// import MetaLink from 'meta-diagram';
import IMetaLinkConverter from './IMetaLinkConverter';
import { castObject } from '../utils';


export default class ProjectionNode extends IMetaLinkConverter {
    to: String;
    name: String;
    icon: String;
    from: String;
    extra: Object;
    isExpanded: Boolean;

    constructor(name: String, from: String, to: String, isExpanded?: Boolean, icon?: String, extra?: Object) {
        super();

        this.to = to;
        this.from = from;
        this.name = name;
        this.icon = icon !== undefined ? icon : "";
        this.extra = extra !== undefined ? extra : {};
        this.isExpanded = isExpanded !== undefined ? isExpanded : false;
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

    getMetaLink() : any{
        console.log("Projection Node implementation of getMetaLink.");
    }
}