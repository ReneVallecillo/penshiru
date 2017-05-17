/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LawListComponent } from './law-list.component';
import { MdCardModule } from '@angular/material';
import { LawService } from '../law.service';
import { LawServiceStub } from '../../../testing/law-stub';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouteStub } from '../../../testing/router-stubs';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('DashboardComponent', () => {
  let component: LawListComponent;
  let fixture: ComponentFixture<LawListComponent>;
  let activatedRoute: ActivatedRouteStub;


  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [LawListComponent],
      imports: [MdCardModule],
      providers: [
        { provide: LawService, useClass: LawServiceStub },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testParams = { id: 9999 }
    fixture = TestBed.createComponent(LawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
