import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import { Result } from '../../../models/result';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SearchItemComponent } from '../search-item/search-item.component';
import { Component, Input } from '@angular/core';

// SearchItemStub
@Component({
  template: '',
  selector: 'app-search-item',
})
class TestSearchItemComponent {
  @Input() result: Result;
}



describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
  let expectedData$ = new Subject<Result[]>();
  let expectedData = expectedData$.asObservable();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListComponent, TestSearchItemComponent],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    expectedData$.next([
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
    component.results = expectedData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
