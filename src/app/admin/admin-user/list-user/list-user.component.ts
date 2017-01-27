import { Component, OnInit } from '@angular/core';

import { ITdDataTableColumn, } from '@covalent/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  selectedUser: Object = null;


  users = [
    { id: 1, name: 'René Vallecillo', alias: 'reneval', company: 'RVC Consultores', active: false },
    { id: 2, name: 'Rosario Daboub', alias: 'RosPrado', company: 'Lulemon', active: true },
  ];

  columns2: ITdDataTableColumn[] = [
    { name: 'name', label: 'Usuario' },
    { name: 'alias', label: 'Alias' },
    { name: 'company', label: 'Organización' },
    { name: 'active', label: 'Activo?' }
  ];



  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  selectEvent(event) {
    if (event.selected) {
      this.selectedUser = event.row;
      console.log(this.selectedUser);
    } else {
      this.selectedUser = null;
    }
  }

  toogleActiveUser(event) {
    console.log(event);
  }

  editUser() {
    this.userService.addTab(this.selectedUser['id']);
  }

}
