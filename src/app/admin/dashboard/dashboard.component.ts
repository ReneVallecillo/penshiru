import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService } from '../../shared/toolbar.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

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
