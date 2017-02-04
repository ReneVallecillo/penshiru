
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class UserServiceStub {
    user: User = {
        name: 'Test User',
        id: 1,
        alias: 'Test Username',
        company: 'Test Company',
        active: false,
        email: 'test@email.com',
    };

    users: User[] = [];

    private tab = new BehaviorSubject(this.testParams)
    private delTab = new BehaviorSubject(this.testParams)
    tab$ = this.tab.asObservable();
    deltab$ = this.delTab.asObservable();
    // Test parameters
    private _testParams: {};
    get testParams() { return this._testParams; }
    set testParams(params: {}) {
        this._testParams = params;
        this.tab.next(params);
    }

    getUserById(id: number) {
        return this.user;
    }

    getAllUsers() {
        let user1 = new User({ name: 'User1', password: '-', active: true });
        let user2 = new User({ name: 'User2', password: '-', active: false });
        this.users.push(user1);
        this.users.push(user2);
        return this.users;
    }
}