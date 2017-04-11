/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DebugElement } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AddUserComponent } from './add-user.component';
import { Observable } from 'rxjs/Observable';
import { validUser, invalidUser } from '../../../../testing/mocks';
import { User } from '../../../../models/';


describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [ReactiveFormsModule, MaterialModule.forRoot(),
        NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a `FormGroup` comprised of `FormControls`', () => {
    expect(component.userForm instanceof FormGroup).toBe(true);
  });


  it('should start with empty user', () => {
    expect(component.user).toEqual(new User());
  });

  it('should be valid with validUser', () => {
    component.userForm.setValue({
      name: validUser.name,
      username: validUser.alias,
      company: validUser.company,
      active: validUser.active,
      account: {
        email: validUser.email,
      }
    });
    expect(component.userForm.valid).toBe(true);

  });

  it('should be invalid with invalidUser', () => {
    component.userForm.setValue({
      name: invalidUser.name,
      username: invalidUser.alias,
      company: invalidUser.company,
      active: invalidUser.active,
      account: {
        email: invalidUser.email,
      }
    });
    expect(component.userForm.valid).toBe(false);
  });

  it('should be invalid with malformed email', () => {
    component.userForm.setValue({
      name: validUser.name,
      username: validUser.alias,
      company: validUser.company,
      active: validUser.active,
      account: {
        email: 'invalidemail.com',
      }
    });
    expect(component.userForm.valid).toBe(false);
  });

  it('should uopdate model on submit', fakeAsync(() => {
    component.userForm.setValue({
      name: validUser.name,
      username: validUser.alias,
      company: validUser.company,
      active: validUser.active,
      account: {
        email: validUser.email,
      }
    });

    component.onSubmit();
    expect(component.user).toEqual(validUser);
  }));
});
