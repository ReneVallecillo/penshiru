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


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule, ReactiveFormsModule,
        BrowserAnimationsModule],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent],
    entryComponents: [ConfirmDialogComponent],
    providers: [],
})
export class SharedModule { }
