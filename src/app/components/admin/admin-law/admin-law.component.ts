import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LawAdminService } from './admin-law.service';

@Component({
  selector: 'app-admin-law',
  templateUrl: './admin-law.component.html',
  styleUrls: ['./admin-law.component.scss']
})
export class AdminLawComponent implements OnInit {

  tabLinks = [
    { label: 'Listar', link: '/admin/law/list' },
    { label: 'Agregar ', link: '/admin/law/upload' },
  ];
  activeLinkIndex = 0;
  addTabPosition = this.tabLinks.length;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;

  jsonRegex = new RegExp('.json$');

  constructor(
    private lawAdminService: LawAdminService,
    private router: Router) { }

  ngOnInit() {
    this.lawAdminService.tab$.subscribe(
      route => {
        this.addTab(route);
      },
    );
    this.lawAdminService.deltab$.subscribe(
      delroute => {
        this.deleteTab(delroute);
      }
    );
  }

  //TODO: Use Service to delete element from array
  deleteTab(tab: any) {
    this.tabLinks.splice(this.tabLinks.indexOf(tab), 1);
    this.router.navigateByUrl('/admin/law/list');
    this.activeLinkIndex = 0;
  }

  addTab(data: string) {
    let newTab = true;
    let foundPos = 0;
    let label: string;
    //TODO: usr/lawid and url/id/lawname should route to same component
    let id: string;
    if (this.jsonRegex.test(data)) {
      label = data;
      id = data;
    } else {
      label = data.slice(data.indexOf('/') + 1);
      id = data.slice(0, data.indexOf('/'));
    }

    this.tabLinks.forEach((item, index) => {
      if (item.label == data.toString()) {
        newTab = false;
        foundPos = index;
      }
    });

    if (newTab) {
      this.tabLinks.splice(this.addTabPosition, 0, {
        label: label,
        link: '../law/review/' + id
      }
      );
      this.activeLinkIndex = this.addTabPosition;
      this.router.navigateByUrl('/admin/law/review/' + id);
    } else {
      this.router.navigateByUrl('/admin/law/review/' + id);
      this.activeLinkIndex = foundPos;
    }

  }

}
