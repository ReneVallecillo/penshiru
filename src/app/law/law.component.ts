import { Component, OnInit } from '@angular/core';

import {MenuService} from '../shared/menu.service'

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.css']
})
export class LawComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.showMenu(true);
  }

}
