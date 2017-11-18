import { Injectable } from '@angular/core';
import { Law, CommonFile } from '../../../../models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LawService {

  private lawurl = 'http://localhost:8080/api/laws';
  private lawtmpurl = 'http://localhost:8080/api/tmp/laws';


  constructor(private http: HttpClient) { }

  getLaws(): Observable<Law[]> {
    return this.http.get<Law[]>(this.lawurl);
  }
  getLaw(id: string): Observable<Law> {
    return this.http.get<Law>(this.lawurl + '/' + id);
  }

  getTmpLaws(): Observable<CommonFile[]> {
    return this.http.get<CommonFile[]>(this.lawtmpurl);
  }

  getTmpLaw(uri: string): Observable<Law> {
    return this.http.get<Law>(this.lawtmpurl + '/' + uri);
  }

  saveLawDB(law: Law): Observable<boolean> {
    return this.http.post<boolean>(this.lawurl, JSON.stringify(law));
  }

  saveTmpLaw(uri: string, law: Law): Observable<Law> {
    return this.http.put<Law>(this.lawtmpurl + '/' + uri, JSON.stringify(law))
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
