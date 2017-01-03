import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

import {Law, LawTmp} from '../../shared/models/';;
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LawService {

  constructor(private http: Http) {}
  
  private lawurl = 'http://localhost:8080/api/laws';
  private lawtmpurl = 'http://localhost:8080/api/tmp/laws';
  
  getLaws() : Observable<Law[]>{
    return this.http.get(this.lawurl)
      .map(this.extractDataT)
      .catch(this.handleError);
  }
  
  getTmpLaws() : Observable<LawTmp[]>{
    return this.http.get(this.lawtmpurl)
    .map(this.extractDataT)
    .catch(this.handleError)
  }

  getTmpLaw(uri:string) : Observable<Law>{
    return this.http.get(this.lawtmpurl+'/'+uri)
    .map(this.extractData)
    .catch(this.handleError)
  }
  
  private extractData(res: Response){
    let body = res.json();
    console.log(body)
    return body || {};
  }

  //fix later
   private extractDataT(res: Response){
    let body = res.json();
    return body.data || [];
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
