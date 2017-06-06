import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectPublicationComponent } from './inspect-publication.component';

describe('InspectPublicationComponent', () => {
  let component: InspectPublicationComponent;
  let fixture: ComponentFixture<InspectPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
