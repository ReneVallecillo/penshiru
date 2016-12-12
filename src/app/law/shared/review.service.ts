import { Injectable } from '@angular/core';
import {Law} from '../../shared/models/law.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {directory} from '../../shared/models/directory'



@Injectable()
export class ReviewService {

    private itemSelected = new Subject<directory>();
    itemSelected$ = this.itemSelected.asObservable();

    announceSelected(selected:directory){
        this.itemSelected.next(selected)
    }
}