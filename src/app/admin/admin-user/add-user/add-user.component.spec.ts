/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AddUserComponent } from './add-user.component';
import { Observable } from 'rxjs/Observable';


describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [ReactiveFormsModule, MaterialModule.forRoot()]
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


  it('should create a `FormControl` for the user', () => {
    component.ngOnInit();
    expect(component.userForm.get('active').value).toBe(false);
  });
});
