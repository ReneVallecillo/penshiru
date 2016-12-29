import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {MenuService} from '../shared/menu.service';
import {SharedModule} from '../shared/shared.module';

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

  constructor(private menuService: MenuService) {

  }

  ngOnInit(){
    this.menuService.showMenu(false)
  }
 }
