import { DocumentT } from './';

export class Document {
    id: number;
    title: string;
    titles: DocumentT[];
    reviewed: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
