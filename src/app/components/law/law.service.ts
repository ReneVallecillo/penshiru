import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Law } from '../../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LawService {

  private api = 'http://localhost:8080/api/';

  constructor(private http: Http) { }

  getLaws(): Observable<Law[]> {
    return this.http.get(this.api + 'laws')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getLawsByCat() {
    return Observable.of<Law[]>([]);

  }

  getLawByID(id: number): Observable<Law> {
    return this.http.get(this.api + 'laws/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
