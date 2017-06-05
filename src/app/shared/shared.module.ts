import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './';

// Material
import { MaterialModule } from '@angular/material';

// Layout
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// Covalent
import { CovalentDataTableModule } from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TreeViewComponent } from './tree-view/tree-view.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule, FileUploadComponent, TreeViewComponent],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent, FileUploadComponent, TreeViewComponent],
    entryComponents: [ConfirmDialogComponent],
})
export class SharedModule { }
