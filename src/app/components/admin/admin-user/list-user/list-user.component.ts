import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn, } from '@covalent/core';

import { UserService } from '../user.service';

import { User } from '../../../../models/';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  selectedUser: Object = null;
  users: User[] = [];

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

    //dummy data:
    let user1: User = {
      id: 1, name: 'René Vallecillo', alias: 'reneval', company: 'rvc-consultores', active: false,
      email: 'reneval@gmail.com'
    };
    let user2: User = {
      id: 2, name: 'Rosario Daboub', alias: 'RosPrado', company: 'lulemon', active: true,
      email: 'ros@gmail.com'
    };
    let user3: User = {
      id: 3, name: 'Nelly Vega', alias: 'NellyV', company: 'retired', active: true,
      email: 'nelly@gmail.com'
    };

    this.users = this.userService.getAllUsers();

    if (this.users.length <= 0) {
      this.userService.addUser(user1);
      this.userService.addUser(user2);
      this.userService.addUser(user3);
      this.users = this.userService.getAllUsers();

    }



  }

  selectEvent(event) {
    if (event.selected) {
      this.selectedUser = event.row;
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
