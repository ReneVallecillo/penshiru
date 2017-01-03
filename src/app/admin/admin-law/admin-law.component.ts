import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-law',
  templateUrl: './admin-law.component.html',
  styleUrls: ['./admin-law.component.scss']
})
export class AdminLawComponent implements OnInit {

  tabLinks = [
    {label: 'Listar', link: '/admin/law/list'},
    {label: 'Revisar', link: '/admin/law/review:file'},
    {label: 'Agregar ', link: '/admin/law/upload'},
  ];
  activeLinkIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
