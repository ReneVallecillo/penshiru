export class User {
    id: number;
    name: string;
    password: string;
    active: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
