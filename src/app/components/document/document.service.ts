import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DocumentService {

  private api = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getDocument(name: string) {
    return this.http.get(this.api + 'parse/' + name)

  }

  getDocuments() {
    return this.http.get(this.api + 'documents')
  }

}
