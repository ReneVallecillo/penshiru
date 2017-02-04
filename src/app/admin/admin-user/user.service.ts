import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  lastID: number = 0;
  users: User[] = [];

  // Tab Management
  private tabSource = new Subject<string>();
  tab$ = this.tabSource.asObservable();
  private delTabSource = new Subject<string>();
  deltab$ = this.delTabSource.asObservable();

  constructor() { }

  addUser(user: User): UserService {
    if (!user.id) {
      user.id = ++this.lastID;
    }
    this.users.push(user)
    return this;
  }

  deleteUserById(id: number): UserService {
    this.users = this.users
      .filter(user => user.id !== id);

    return this;
  }

  updateUserById(id: number, values: Object = {}): User {
    let user = this.getUserById(id);
    console.log(values);
    console.log("id=" + id + " user:" + user);
    if (!user) {
      return null;
    }
    Object.assign(user, values);
    return user;
  }

  // Simulate GET /todos
  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    console.log('real used');
    return this.users
      .filter(user => user.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleUserActive(user: User) {
    let updatedUser = this.updateUserById(user.id, {
      active: !user.active
    });
    return updatedUser;
  }

  //addTab
  addTab(route: string) {
    this.tabSource.next(route);
  }

  delTab(route: string) {
    this.delTabSource.next(route);
  }

}
