import { Injectable } from '@angular/core';
import { Law } from '../../../models';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { directory } from '../../../models/';



@Injectable()
export class ReviewService {

    private itemSelected = new Subject<directory>();
    itemSelected$ = this.itemSelected.asObservable();

    announceSelected(selected: directory) {
        this.itemSelected.next(selected)
    }
}