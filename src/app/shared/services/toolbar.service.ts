import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ToolbarService {

  private toogleSource = new Subject<boolean>();
  private sideNavSource = new Subject<boolean>()
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
