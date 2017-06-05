
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PenshiruMaterialModule } from '../../../../shared/penshiru-material.module';

import { LawReviewListComponent } from './law-review-list.component';

import { LawService } from '../shared/law.service';


import { AbstractMockObservableService } from '../../../../testing/ObService';
import { LawAdminService } from '../admin-law.service';

describe('LawReviewListComponent', () => {
  let component: LawReviewListComponent;
  let fixture: ComponentFixture<LawReviewListComponent>;

  class MockLawService extends AbstractMockObservableService {
    doStuff() { // change to actual needed methods. Always return this
      return this;
    }
  }

  class MockLawAdminService extends AbstractMockObservableService {
    doStuff() { // change to actual needed methods. Always return this
      return this;
    }
  }
  let mockLawService, mockLawAdminService;

  beforeEach(async(() => {
    mockLawService = new MockLawService();
    mockLawAdminService = new MockLawAdminService();

    TestBed.configureTestingModule({
      declarations: [LawReviewListComponent],
      imports: [PenshiruMaterialModule],
      providers: [
        { provide: LawAdminService, classValue: mockLawAdminService },
      ]
    })
      // Override component's own provider
      // .overrideComponent(LawReviewListComponent, {
      //   set: {
      //     providers: [
      //       { provide: LawService, useClass: mockLawService }
      //     ]
      //   }
      // })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});



