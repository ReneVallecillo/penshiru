import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './';

// Material
import { MaterialModule } from '@angular/material';

// Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// Covalent
import { CovalentDataTableModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule, FileUploadComponent],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent, FileUploadComponent],
    entryComponents: [ConfirmDialogComponent],
})
export class SharedModule { }
