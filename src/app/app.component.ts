import { Component, OnInit } from '@angular/core';
import { MenuService } from './shared/menu.service';
import { ToolbarService } from './shared/toolbar.service';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  hasMenu: boolean = false;
  sidenavToggler$: Observable<boolean> = new Observable<boolean>().startWith(false);
  sidenav$: Observable<boolean> = new Observable<boolean>();
  sidenav: boolean = false;

  constructor(
    private menuService: MenuService,
    private toolbarService: ToolbarService,
  ) {
    menuService.menu$.subscribe(
      active => {
        this.hasMenu = active;
      }
    );

    this.sidenavToggler$ = toolbarService.toogle$;
    this.sidenav$ = toolbarService.sideNav$;
  }

  showSidenav() {
    // console.log('showSideNav on appcomponent reached');
    this.toolbarService.showSidenav(!this.sidenav);
  }
}
