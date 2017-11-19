import { Injectable } from '@angular/core';
import { Law, CommonFile } from '../../../../models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { map, catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../../../shared/services/message.service';

@Injectable()
export class LawService {

  private lawurl = 'http://localhost:8080/api/laws';
  private lawtmpurl = 'http://localhost:8080/api/tmp/laws';


  constructor(private http: HttpClient,
    private msgService: MessageService) { }

  getLaws(): Observable<Law[]> {
    return this.http.get<Law[]>(this.lawurl)
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<Law[]>('getLaws', []))
      );
  }
  getLaw(id: string): Observable<Law> {
    return this.http.get<Law>(this.lawurl + '/' + id)
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<Law>('getLaw'))
      );
  }

  getTmpLaws(): Observable<CommonFile[]> {
    return this.http.get<CommonFile[]>(this.lawtmpurl)
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<CommonFile[]>('getLaw', []))
      );
  }

  getTmpLaw(uri: string): Observable<Law> {
    return this.http.get<Law>(this.lawtmpurl + '/' + uri)
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<Law>('getTmpLaw'))
      );
  }

  saveLawDB(law: Law): Observable<boolean> {
    return this.http.post<boolean>(this.lawurl, JSON.stringify(law))
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<boolean>('SaveLawDB'))
      );
  }

  saveTmpLaw(uri: string, law: Law): Observable<Law> {
    return this.http.put<Law>(this.lawtmpurl + '/' + uri, JSON.stringify(law))
      .pipe(
      map(data => data['data']),
      catchError(this.handleError<Law>('getLaw'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.msgService.add('HeroService: ' + message);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
