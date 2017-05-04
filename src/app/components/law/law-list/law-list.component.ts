import { Component, OnInit } from '@angular/core';
import { LawService } from "../law.service";
import { Observable } from "rxjs/Observable";
import { Law } from "../../../models";

@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.scss']
})
export class LawListComponent implements OnInit {
  laws: Observable<Law[]>;

  categories = [
    { name: 'Tributación', color: 'Red' },
    { name: 'Municipal', color: 'Red' },
    { name: 'Civil', color: 'Red' },
    { name: 'Penal', color: 'Red' },
    { name: 'Ejecutivo', color: 'Red' },
  ];

  constructor(private lawService: LawService) { }

  ngOnInit() {
    this.getLaws();
  }

  getLaws() {
    this.laws = this.lawService.getLaws();
  }

}
