import { PublicationP } from './';

export class PublicationT {
    id: number;
    title: string;
    paragraphs: PublicationP[];
    reviewed: boolean;
    expanded: boolean;
    type: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
