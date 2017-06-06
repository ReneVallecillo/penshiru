import { Book } from './book.model';
import { Article } from './article.model';
import { Law } from './law.model';
import { Title } from './title.model';
import { Chapter } from './chapter.model';
import { PublicationP } from './publicationP';

export interface directory {
    name: string;
    reviewed: boolean;
    expanded: boolean;
    books?: Book[]
    titles?: Title[];
    chapters?: Chapter[];
    articles?: Article[];
    paragraph?: PublicationP[];
    type: string;
}
