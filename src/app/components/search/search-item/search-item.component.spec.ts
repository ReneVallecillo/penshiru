import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemComponent } from './search-item.component';
import { TitleCasePipe } from '../../../shared/title-case.pipe';
import { Pipe, PipeTransform, DebugElement } from '@angular/core';
import { PenshiruMaterialModule } from '../../../shared/penshiru-material.module';
import { By } from '@angular/platform-browser';
import { Result } from '../../../models';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


class RouterStub {
  navigate(url: string) { return url; }
}


describe('SearchItemComponent', () => {
  let component: SearchItemComponent;
  let fixture: ComponentFixture<SearchItemComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let expectedItem: Result;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchItemComponent, MockPipe],
      imports: [PenshiruMaterialModule, RouterTestingModule],
      providers: [
        { provide: Router, UseClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchItemComponent);
    component = fixture.componentInstance;

    expectedItem = {
      id: '1',
      fragments: {
        name: 'Arto 42 - Gastos Deducibles',
        content: `Sit laboris proident voluptate aliqua. Enim deserunt in excepteur adipisicing. 
          Irure dolore consequat cillum consectetur. Veniam eiusmod ullamco duis irure ut. Nostrud 
          labore voluptate ullamco veniam eiusmod consequat velit reprehenderit ad mollit pariatur. 
          Velit sint anim duis nostrud nulla. Mollit labore id voluptate exercitation do ullamco mollit fugiat.`
      },
      fields: {
        name: 'Arto 42 - Gastos Deducibles',
        content: `Sit laboris proident voluptate aliqua. Enim deserunt in excepteur adipisicing. 
          Irure dolore consequat cillum consectetur. Veniam eiusmod ullamco duis irure ut. Nostrud 
          labore voluptate ullamco veniam eiusmod consequat velit reprehenderit ad mollit pariatur. 
          Velit sint anim duis nostrud nulla. Mollit labore id voluptate exercitation do ullamco mollit fugiat.`,
        type: 'Article',
        law_name: 'Ley de Concertacioón Tributaria',
        law_id: 1
      }
    };
    component.result = expectedItem;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Pipe({ name: 'truncate' })
class MockPipe implements PipeTransform {
  transform(value: number): number {
    //Do stuff here, if you want
    return value;
  }
}