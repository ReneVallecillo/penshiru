import { Article } from './article.model';
import { directory } from './directory'

export class Chapter implements directory {
    public id: number;
    public name: string;
    public articles: Article[];
    public titleID: number;
    public expanded = false;
    public reviewed = false;
    public type = 'chapter'
}
