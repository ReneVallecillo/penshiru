import { Component, OnInit } from '@angular/core';
import { PublicationService } from './publication.service';
import { Router } from '@angular/router';
import { TabService } from '../../../shared/tab.service';

@Component({
  selector: 'app-admin-publication',
  templateUrl: './admin-publication.component.html',
  styleUrls: ['./admin-publication.component.scss'],
  providers: [TabService]
})
export class AdminPublicationComponent implements OnInit {

  tabLinks = [
    { label: 'Listar', link: '/admin/publications/list' },
    { label: 'Agregar ', link: '/admin/publications/add' },
  ];
  activeLinkIndex = 0;
  addTabPosition = this.tabLinks.length;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;

  constructor(
    private router: Router,
    private tabService: TabService,
  ) { }

  ngOnInit() {
    this.tabService.tab$.subscribe(
      route => {
        this.addTab(route);
      },
    );
    this.tabService.deltab$.subscribe(
      delroute => {
        this.delTab(delroute);
      }
    );
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
        label: data.toString(),
        link: '../publications' + data.toString(),
      });

      this.activeLinkIndex = this.addTabPosition;
      this.router.navigateByUrl('/admin/publications/' + data);
    } else {
      this.router.navigateByUrl('/admin/publications/' + data);
      this.activeLinkIndex = foundPos;
    }

  }

  delTab(tab: any) {
    // console.log('del called inside Admin-user.component');
    this.tabLinks.splice(this.tabLinks.indexOf(tab), 1);
    this.router.navigateByUrl('/admin/publications/list');
    this.activeLinkIndex = 0;
  }


}
