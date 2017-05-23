export class CommonFile {
    id: number;
    name: string;
    path: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
