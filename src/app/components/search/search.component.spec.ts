import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Component, Input, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Result } from '../../models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SearchService } from "./search.service";
// SearchBoxStub
@Component({
  template: '',
  selector: 'app-search-box',
})
class TestSearchBoxComponent {
  @Input() options: Observable<string[]>;
}

@Component({
  template: '',
  selector: 'app-search-list',
})
class TestSearchListComponent {
  @Input() results: Observable<Result[]>;
}

@Injectable()
export class SearchServiceStub {

  search(query: string): Observable<Result[]> {
    return Observable.of([
      {
        id: 1,
        fragments: {
          name: 'Ea deserunt commodo cillum fugiat eu commodo est occaecat.',
          content: 'Consequat dolore magna cillum ullamco consequat esse ea exercitation velit veniam amet deserunt ea commodo.',
        },
        fields: {
          name: 'Ea deserunt commodo cillum fugiat eu commodo est occaecat.',
          content: 'Consequat dolore magna cillum ullamco consequat esse ea exercitation velit veniam amet deserunt ea commodo.',
          type: 'Article',
          law_name: 'Excepteur velit deserunt deserunt in quis minim fugiat id enim sit sit.'

        }
      }
    ]);
  }
  AutoComplete(query: string): Observable<string[]> {
    return Observable.of(['Ley de Concertación', 'Ley de Equidad']);
  }


}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, TestSearchBoxComponent, TestSearchListComponent],
      providers: [
        { provide: SearchService, useClass: SearchServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
