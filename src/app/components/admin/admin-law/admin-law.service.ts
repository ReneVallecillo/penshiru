import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LawAdminService {

    private tabSource = new Subject<string>();
    tab$ = this.tabSource.asObservable();
    // Tab Management

    private delTabSource = new Subject<string>();
    deltab$ = this.delTabSource.asObservable();


    constructor() { }

    addTab(route: string) {
        this.tabSource.next(route);
    }

    delTab(route: string) {
        this.delTabSource.next(route);
    }
}