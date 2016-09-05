import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MenuService {

    private menuSource = new Subject<boolean>();

    menu$ = this.menuSource.asObservable();

    showMenu(active: boolean){
        this.menuSource.next(active);
    }

    constructor() { }
}