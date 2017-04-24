/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MdTabsModule } from '@angular/material'
import { UserServiceStub } from '../../../testing/user-stubs';
import { UserService } from './user.service'; // Remove

import { AdminUserComponent } from './admin-user.component';

//Dummy Component
class TestComponent {
  collName = 'testing';
  item = {
    _id: 1
  };
}

@Component({
  template: ''
})
class DummyComponent {
}

describe('AdminUserComponent', () => {
  let component: AdminUserComponent;
  let fixture: ComponentFixture<AdminUserComponent>;
  let userServiceStub: UserServiceStub;


  beforeEach(async(() => {
    userServiceStub = new UserServiceStub();
    TestBed.configureTestingModule({
      declarations: [AdminUserComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'admin/user/list', component: DummyComponent },
          { path: 'admin/user/add', component: DummyComponent },

        ]),
        MdTabsModule.forRoot()
      ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    userServiceStub.testParams = { data: 'test' }
    fixture = TestBed.createComponent(AdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
