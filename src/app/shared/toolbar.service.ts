import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolbarService {

  private toogleSource = new Subject<Boolean>();
  private sideNavSource = new Subject<Boolean>()
  toogle$ = this.toogleSource.asObservable();
  sideNav$ = this.sideNavSource.asObservable();

  constructor() { }

  showSidenavToggler(active: boolean) {
    this.toogleSource.next(active);
  }

  showSidenav(active: boolean) {
    this.sideNavSource.next(active);
  }
}
