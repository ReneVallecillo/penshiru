import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LawAdminService {

    private tabSource = new Subject<string>();
    tab$ = this.tabSource.asObservable();

    constructor() { }

    addTab(route: string) {
        this.tabSource.next(route);
    }
}