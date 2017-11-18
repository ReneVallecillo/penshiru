import {
  Injectable
} from '@angular/core';
import {

} from '@angular/http';

import {
  Law,
  CommonFile,
} from '../../../../models';
import {
  Observable
} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
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
}
