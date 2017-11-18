import { Title } from './title.model';
import { directory } from './directory';
export class Book implements directory {
    public id: number;
    public name: string;
    public titles: Title[];
    public lawid: number;
    public reviewed: boolean;
    public expanded = false;
    public type = 'book';
}
