/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PenshiruMaterialModule } from '../../../../shared/penshiru-material.module';
import { CovalentDataTableModule } from '@covalent/core';
import { UserServiceStub } from '../../../../testing/user-stubs';
import { UserService } from '../user.service'; // Remove



import { ListUserComponent } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let userServiceStub: UserServiceStub;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      imports: [PenshiruMaterialModule, CovalentDataTableModule.forRoot()],
      providers: [
        { provide: UserService, useClass: UserServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
