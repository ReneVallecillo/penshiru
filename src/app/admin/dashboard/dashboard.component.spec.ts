/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
// USE TO NOT TEST ROUTER
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToolbarService } from '../../shared/toolbar.service';


import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [MaterialModule.forRoot()],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ToolbarService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let userService = TestBed.get(ToolbarService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
