import { Chapter } from './chapter.model';
import { directory } from './directory';

export class Title implements directory {
    public id: number;
    public name: string;
    public chapters: Chapter[];
    public lawid: number;
    public reviewed: boolean;
    public expanded = false;
    public type = 'title';
    public titles: Title[];
}
