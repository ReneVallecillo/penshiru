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
