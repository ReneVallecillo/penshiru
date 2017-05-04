import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.scss']
})
export class LawListComponent implements OnInit {

  categories = [
    { name: 'Tributación', color: 'Red' },
    { name: 'Municipal', color: 'Red' },
    { name: 'Civil', color: 'Red' },
    { name: 'Penal', color: 'Red' },
    { name: 'Ejecutivo', color: 'Red' },
  ];

  laws = [
    {
      name: 'Ley de Concertación', cat: 'Tributación', journal: '25',
      journal_date: '25/11/84', approved: '23/11/84'
    },
    {
      name: 'Ley de Equidad', cat: 'Tributación', journal: '25',
      journal_date: '25/11/84', approved: '23/11/84'
    },
    {
      name: 'Código de Trabajo', cat: 'Civil', journal: '25',
      journal_date: '25/11/84', approved: '23/11/84'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
