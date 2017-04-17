import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Observable<Result[]>;
  private queryTerms = new Subject<string>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.results = this.queryTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.searchService.search(term)
        : Observable.of<Result[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Result[]>([]);
      });
  }

  search(query: string) {
    this.queryTerms.next(query);
  }
}
