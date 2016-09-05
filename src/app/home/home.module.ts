import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import { HomeComponent } from './home.component';

import {MenuService} from '../shared/menu.service'

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule implements OnInit {

  constructor(private menuService:MenuService){

  }

  ngOnInit(){
    this.menuService.showMenu(false)
  }
 }
