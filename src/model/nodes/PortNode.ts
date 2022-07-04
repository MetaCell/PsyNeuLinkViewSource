import { Direction } from '../../constants';

export default class Port {
    id: String;
    name: String;
    role: Enumerator<Direction>;

    constructor(id: string, name: string, role: Enumerator<Direction>) {
        this.id = id ? id : this._throw('Port ID should be defined.', '');
        this.name = name ? name : id;
        this.role = role ? role : this._throw('Port role should be defined.', Direction.INPUT);
    }

    _throw(m, returnValue) {
        throw m;
        return returnValue;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.role;
    }
}