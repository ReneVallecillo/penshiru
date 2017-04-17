import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { SearchService } from './search.service'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: Result[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search(query: string) {
    this.searchService.search(query)
      .subscribe(
      results => this.results = results
      );
  }

}
