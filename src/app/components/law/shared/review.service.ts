import { Injectable } from '@angular/core';
import { Law } from '../../../models';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { directory } from '../../../models/';

interface Iteratable {
    name: string;
    type: string;
}

@Injectable()
export class ReviewService {

    private itemSelected = new Subject<directory>();
    itemSelected$ = this.itemSelected.asObservable();
    private law = new Subject<Law>();
    law$ = this.law.asObservable();

    announceSelected(selected: directory) {
        this.itemSelected.next(selected);
    }

    delItem(law: Law, data: string, index: number, item: Iteratable, indexes: number[]): boolean {
        if (JSON.stringify(item.name) === JSON.stringify(data)) {
            const num = indexes.length;
            console.log(indexes.length);
            console.log('Match found!');
            switch (num) {
                case 1: {
                    if (item.type === 'Book') {
                        law.books.splice(index, 1);
                        this.law.next(law);
                    } else {
                        // law.articles.splice(index, 1);
                    }
                    break;
                }
                case 2: {
                    if (item.type === 'Title') {
                        console.log('title found');
                        console.log('title found');
                        console.log('index:' + indexes);
                        console.log('Before:' + law.books[indexes[0]].titles.length);
                        law.books[indexes[0]].titles.splice(indexes[0], 1);
                        console.log('After:' + law.books[indexes[0]].titles.length);
                        console.table(law.books[indexes[0]].titles);

                        this.law.next(law);
                    } else {
                        console.log('case when 2 arg not title');
                    }
                    break;
                }
                default: {
                    console.log('Not enough arguments');
                }
            }
            return true;
        }
        return false;
    }
}