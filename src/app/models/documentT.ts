import { DocumentP } from './documentP';

export class DocumentT {
    id: number;
    title: string;
    paragraphs: DocumentP[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
