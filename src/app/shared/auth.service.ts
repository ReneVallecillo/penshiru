import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';

// import {SharedService} from './shared.service'


import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private domain: string = 'http://localhost:8080';
    constructor(private http: Http) {

    }

    login(username, password): Observable<boolean> {
        return this.http.post(this.domain + '/api/v1/login', JSON.stringify(
            {username: username, password: password })).map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                }else {
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }


    jwt(): RequestOptions {
         // create authorization header with jwt token

        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser);
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}

