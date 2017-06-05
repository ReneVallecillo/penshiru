/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PenshiruMaterialModule } from '../../../../shared/penshiru-material.module';


import { LawUploadComponent } from './law-upload.component';

describe('LawUploadComponent', () => {
  let component: LawUploadComponent;
  let fixture: ComponentFixture<LawUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LawUploadComponent],
      imports: [PenshiruMaterialModule],
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