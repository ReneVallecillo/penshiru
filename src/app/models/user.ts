export class User {
    id: number;
    name: string;
    active: boolean;
    alias: string;
    company: string;
    email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
