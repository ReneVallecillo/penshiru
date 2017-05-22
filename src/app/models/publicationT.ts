import { PublicationP } from './';

export class PublicationT {
    id: number;
    title: string;
    paragraphs: PublicationP[];

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
