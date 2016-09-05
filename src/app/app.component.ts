import { Component, OnInit} from '@angular/core';
import {MenuService} from './shared/menu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app works!';

  hasMenu: boolean = false;
  
  constructor(private menuService: MenuService){
    menuService.menu$.subscribe(
      active => {
        this.hasMenu = active;
      }
    )
  }

  
}
