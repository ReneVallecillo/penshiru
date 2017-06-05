/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NgModule } from '@angular/core';
import { MdDialogModule, MdDialog, OverlayContainer } from '@angular/material';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';




import { ConfirmDialogComponent } from './confirm-dialog.component';
import { SharedModule } from '../shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ConfirmDialogComponent],
  exports: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  imports: [MdDialogModule, NoopAnimationsModule],
})
class DialogTestModule { }



describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let dialog: MdDialog;
  let overlayContainerElement: HTMLElement;




  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogTestModule, MdDialogModule],
      providers: [
        {
          provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    dialog = TestBed.get(MdDialog);
    let dialogRef = dialog.open(ConfirmDialogComponent);

    component = dialogRef.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

