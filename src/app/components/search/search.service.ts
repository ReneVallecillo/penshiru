import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  private _results: BehaviorSubject<Result[]> = new BehaviorSubject([]);
  public results: Observable<Result[]> = this._results.asObservable();

  private searchAPI = 'http://localhost:8585/law/search';
  private autoCompleteAPI = 'http://localhost:8080/api/law/autocomplete';
  constructor(private http: HttpClient) { }

  search(query: string): Observable<Result[]> {
    console.log('search reached');
    return this.http.get<Result[]>(this.searchAPI + '?query=' + query)
  }

  autoComplete(query: string): Observable<string[]> {
    console.log('autocomplete reached');
    return this.http.get<string[]>(this.autoCompleteAPI + '?query=' + query)
  }
}

