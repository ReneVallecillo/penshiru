import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, Config } from '../../../config/app.config';
import { Observable } from 'rxjs/Observable';
import { Publication, CommonFile } from '../../../models';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PublicationService {

  constructor( @Inject(APP_CONFIG) private config: Config, private http: HttpClient) { }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>(this.config.apiEndpoint + 'publications')
  }

  getTmpPublications(): Observable<CommonFile[]> {
    return this.http.get<CommonFile[]>(this.config.apiEndpoint + 'tmp/publications')
  }

  getTmpPublication(name: string): Observable<Publication> {
    return this.http.get<Publication>(this.config.apiEndpoint + 'tmp/publications/' + name)
  }
}
