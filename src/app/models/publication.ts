import { PublicationT } from './';

export class Publication {
    id: number;
    name: string;
    titles: PublicationT[];
    reviewed: boolean;
    expanded = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
