export class User {
    id: number;
    name: string;
    lastName: string;
    active: boolean;
    alias: string;
    company: string;
    email: string;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
