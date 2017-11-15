import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService } from '../../../shared/toolbar.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  menu = [
    { name: 'Usuarios', path: '/admin/users' },
    { name: 'Leyes', path: '/admin/law' },
    { name: 'Publicaciones', path: '/admin/publications' }
  ];

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toogleToolbar(false);
    this.toogleSidenav();
  }

  toogleToolbar(active: boolean) {
    this.toolbarService.showSidenavToggler(!active);
  }

  toogleSidenav() {
    // console.log('toogleSideNav on dashboard reached');
    this.toolbarService.sideNav$.subscribe(
      () => { this.sidenav.toggle(); },
    );
  }


}
