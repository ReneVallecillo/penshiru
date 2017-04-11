import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService {

  private _results: BehaviorSubject<Result[]> = new BehaviorSubject([]);
  public results: Observable<Result[]> = this._results.asObservable();

  private url = 'http://localhost:8585/law/search?query=';
  constructor(private http: Http) { }

  search(query: string): Observable<Result[]> {
    return this.http.get(this.url + query)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
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

