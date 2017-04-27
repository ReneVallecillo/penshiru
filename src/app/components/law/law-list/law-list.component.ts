import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.css']
})
export class LawListComponent implements OnInit {

  categories = [
    { name: 'Tributación', color: 'Red' },
    { name: 'Municipal', color: 'Red' },
    { name: 'Civil', color: 'Red' },
    { name: 'Penal', color: 'Red' },
    { name: 'Ejecutivo', color: 'Red' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
