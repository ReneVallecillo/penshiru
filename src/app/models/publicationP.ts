export class PublicationP {
    id: number;
    text: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
