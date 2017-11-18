import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TabService {

    // Tab Management
    private tabSource = new Subject<string>();
    tab$ = this.tabSource.asObservable();
    private delTabSource = new Subject<string>();
    deltab$ = this.delTabSource.asObservable();

    constructor() { }


    //addTab
    addTab(route: string) {
        this.tabSource.next(route);
    }

    delTab(route: string) {
        this.delTabSource.next(route);
    }

}