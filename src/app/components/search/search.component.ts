import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/partition';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from "rxjs/BehaviorSubject";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  results: Observable<Result[]>;
  autoItems: Observable<string[]>;
  private queryTerms = new BehaviorSubject<string>('');
  public query = new BehaviorSubject<string>('');
  private empty$ = new Subject<string[]>();
  private empty = this.empty$.asObservable();
  private autoTerms = new Observable<string>();
  private coSearch$ = new Subject<string>();
  private coSearch = this.coSearch$.asObservable();
  private searchTerms = new Observable<string>();

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    [this.autoTerms, this.searchTerms] = this.queryTerms
      .debounceTime(500)
      .distinctUntilChanged()
      .partition(input => (/^(LEY|Ley|ley|Codigo|CODIGO|CÓDIGO|codigo|Código|código)[a-zA-Z\u00C0-\u017F\s]*(?!\/)$/.test(input)));

    this.results = Observable.merge(this.searchTerms, this.coSearch)
      .switchMap(term => term
        ? this.searchService.search(term)
        : Observable.of<Result[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Result[]>([]);
      });

    this.autoItems = Observable.merge(this.autoTerms
      .switchMap(term => term
        ? this.searchService.autoComplete(term)
        : Observable.of<string[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      }), this.empty);

    this.searchTerms.subscribe(
      (term) => {
        this.empty$.next(<string[]>([]));
      }
    );

    this.autoTerms.subscribe(
      (term) => {
        if (term) {
          this.coSearch$.next(term);
        }
      }
    );

    this.route.queryParams
      .subscribe((param: Params) =>
        this.query.next(param['query'])
      );

    this.results.subscribe(
      result => console.log(result)
    );
  }
  search(query: string) {
    this.queryTerms.next(query);
  }
}
