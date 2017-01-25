import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './';

// Material
import { MaterialModule } from '@angular/material';

// Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// Covalent
import { CovalentDataTableModule } from '@covalent/core';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, FlexLayoutModule, CovalentDataTableModule],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent],
    entryComponents: [ConfirmDialogComponent],
    providers: [],
})
export class SharedModule { }
