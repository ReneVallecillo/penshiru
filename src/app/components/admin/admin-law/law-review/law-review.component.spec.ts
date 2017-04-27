/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
// USE TO NOT TEST ROUTER
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LawReviewComponent } from './law-review.component';
import { LawService } from '../shared/law.service';
import { AbstractMockObservableService } from '../../../../testing/ObService';

describe('LawReviewComponent', () => {
  let component: LawReviewComponent;
  let fixture: ComponentFixture<LawReviewComponent>;

  class MockLawService extends AbstractMockObservableService {
    doStuff() { // change to actual needed methods. Always return this
      return this;
    }
  }

  let mockLawService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LawReviewComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      // Override component's own provider
      .overrideComponent(LawReviewComponent, {
        set: {
          providers: [
            { provide: LawService, useClass: MockLawService }
          ]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    mockLawService = new MockLawService();
    fixture = TestBed.createComponent(LawReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
