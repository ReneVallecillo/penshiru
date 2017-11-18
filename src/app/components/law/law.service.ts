import { Injectable } from '@angular/core';
import { Law } from '../../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LawService {

  private api = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getLaws(): Observable<Law[]> {
    return this.http.get<Law[]>(this.api + 'laws')
  }

  getLawsByCat() {
    return Observable.of<Law[]>([]);

  }

  getLawByID(id: number): Observable<Law> {
    return this.http.get<Law>(this.api + 'laws/' + id)
  }
}
