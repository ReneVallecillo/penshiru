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
  // activeTabIndex = 0;
  addTabPosition = this.tabLinks.length;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;

  constructor(
    private lawAdminService: LawAdminService,
    private router: Router) { }

  ngOnInit() {
    this.lawAdminService.tab$.subscribe(
      route => {
        this.addTab(route);
      },
    );
  }

  //TODO: Use Service to delete element from array
  deleteTab(tab: any) {
    this.tabLinks.splice(this.tabLinks.indexOf(tab), 1);
  }

  addTab(data: string) {
    let newTab = true;
    let foundPos = 0;

    this.tabLinks.forEach((item, index) => {
      if (item.label == data.toString()) {
        newTab = false;
        foundPos = index;
      }
    });

    if (newTab) {
      this.tabLinks.splice(this.addTabPosition, 0, {
        label: data,
        link: '../law/review/' + data
      }
      );
      this.activeLinkIndex = this.addTabPosition;
      this.router.navigateByUrl('/admin/law/review/' + data);
    } else {
      this.router.navigateByUrl('/admin/law/review/' + data);
      this.activeLinkIndex = foundPos;
    }

  }

}
