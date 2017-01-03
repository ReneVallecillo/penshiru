import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MenuService } from '../shared/menu.service';
import { SharedModule } from '../shared/shared.module';
import { ToolbarService } from '../shared/toolbar.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule implements OnInit {

  constructor(private menuService: MenuService,
    private toolbarService: ToolbarService) {

  }

  ngOnInit() {
    this.menuService.showMenu(false);
    //TODO: It does not get call once you enter home page for
    //second time
    this.toolbarService.showSidenavToggler(false);
  }
}
