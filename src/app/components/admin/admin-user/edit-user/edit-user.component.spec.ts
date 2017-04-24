/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '@angular/material';

import { EditUserComponent } from './edit-user.component';
import { UserService } from '../user.service'; // Remove

import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../testing/router-stubs';
import { UserServiceStub } from '../../../../testing/user-stubs';
import { Observable } from 'rxjs/Observable';



describe('EditUserComponent', () => {



  // Testing vars
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let activatedRoute: ActivatedRouteStub;
  let userServiceStub: UserServiceStub;


  beforeEach(async(() => {

    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [ReactiveFormsModule, FormsModule,
        MaterialModule.forRoot(), NoopAnimationsModule],
      providers: [
        { provide: UserService, useClass: UserServiceStub },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // the `id` value is irrelevant because ignored by service stub
    activatedRoute.testParams = { id: 99999 };

    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
