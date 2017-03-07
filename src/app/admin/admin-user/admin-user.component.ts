import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';


@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {

  tabLinks = [
    { label: 'Listar', link: '/admin/users/list' },
    { label: 'Agregar ', link: '/admin/users/add' },
  ];
  activeLinkIndex = 0;
  addTabPosition = this.tabLinks.length;
  gotoNewTabAfterAdding = false;
  createWithLongContent = false;

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.tab$.subscribe(
      route => {
        this.addTab(route);
      },
    );
    this.userService.deltab$.subscribe(
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
        link: '../users' + data.toString(),
      });

      this.activeLinkIndex = this.addTabPosition;
      this.router.navigateByUrl('/admin/users/' + data);
    } else {
      this.router.navigateByUrl('/admin/users/' + data);
      this.activeLinkIndex = foundPos;
    }

  }

  delTab(tab: any) {
    // console.log('del called inside Admin-user.component');
    this.tabLinks.splice(this.tabLinks.indexOf(tab), 1);
    this.router.navigateByUrl('/admin/users/list');
    this.activeLinkIndex = 0;
  }

}
