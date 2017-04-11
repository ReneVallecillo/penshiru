/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';


import { LawUploadComponent } from './law-upload.component';

describe('LawUploadComponent', () => {
  let component: LawUploadComponent;
  let fixture: ComponentFixture<LawUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LawUploadComponent],
      imports: [MaterialModule.forRoot()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});