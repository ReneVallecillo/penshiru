import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/partition'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Observable<Result[]>;
  autoItems: Observable<string[]>;

  private queryTerms = new Subject<string>();
  private autoTerms = new Observable<string>();
  private searchTerms = new Observable<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    [this.autoTerms, this.searchTerms] = this.queryTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .partition(input => (/^(Ley|ley|Codigo|codigo|Código|código)\s?\w?/.test(input)));

    this.results = this.searchTerms
      .switchMap(term => term
        ? this.searchService.search(term)
        : Observable.of<Result[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Result[]>([]);
      });
    this.autoItems = this.autoTerms
      .switchMap(term => term
        ? this.searchService.autoComplete(term)
        : Observable.of<string[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      });
  }

  search(query: string) {
    this.queryTerms.next(query);
  }
}
