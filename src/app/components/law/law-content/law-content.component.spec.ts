import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawContentComponent } from './law-content.component';

describe('LawContentComponent', () => {
  let component: LawContentComponent;
  let fixture: ComponentFixture<LawContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
