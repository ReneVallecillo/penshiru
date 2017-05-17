import { Title } from './title.model';
import { Book } from './book.model';

export class Law {

    public id: number;
    public name: string;
    public books: Book[];
    public titles: Title[];
    public approvalDate: Date;
    public publishDate: Date;
    public journal: string;
    public intro: string;
    public init: string;

    // tslint:disable-next-line:member-ordering
    static fromJSON(json: LawJSON | string): Law {
        if (typeof json === 'string') {
            return JSON.parse(json, Law.reviver);
        } else {
            let law = Object.create(Law.prototype);
            return Object.assign(law, json, {});
        }
    }

    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call User.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === '' ? Law.fromJSON(value) : value;
    }

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}

interface LawJSON {
    id: number;
    name: string;
    titles: Title[];
    approvalDate: Date;
    publishData: Date;
    journal: string;
    intro: string;
}