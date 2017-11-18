import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from './shared/services/menu.service';
import { ToolbarService } from './shared/services/toolbar.service';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  hasMenu = false;
  sidenavToggler$ = new BehaviorSubject(false);
  sidenav$ = new BehaviorSubject(false);


  constructor(
    private menuService: MenuService,
    private toolbarService: ToolbarService,
  ) {
    menuService.menu$.subscribe(
      active => {
        this.hasMenu = active;
      }
    );

    // this.sidenavToggler$ = toolbarService.toogle$;
    // this.sidenav$ = toolbarService.sideNav$;
  }

  showSidenav() {
    // console.log('showSideNav on appcomponent reached');
    // this.toolbarService.showSidenav(!this.sidenav);
  }

  ngAfterViewInit() {
    // this.sidenavToggler$.startWith(false);
  }
}
