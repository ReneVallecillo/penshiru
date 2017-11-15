export class PublicationP {
    id: number;
    text: string;
    checked: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
