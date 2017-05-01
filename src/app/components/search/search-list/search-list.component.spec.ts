import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListComponent } from './search-list.component';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

describe('SearchListComponent', () => {
  let component: SearchListComponent;
  let fixture: ComponentFixture<SearchListComponent>;
  let expectedData: BehaviorSubject<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListComponent);
    component = fixture.componentInstance;
    expectedData = of({
      results: [
        {
          id: 1,
          fragments: {
            name: 'Ea deserunt commodo cillum fugiat eu commodo est occaecat.',
            content: 'Consequat dolore magna cillum ullamco consequat esse ea exercitation velit veniam amet deserunt ea commodo.'
          },
          fields: {
            name: 'Ea deserunt commodo cillum fugiat eu commodo est occaecat.',
            content: 'Consequat dolore magna cillum ullamco consequat esse ea exercitation velit veniam amet deserunt ea commodo.'

          }
        }
      ]
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
