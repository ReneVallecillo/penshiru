import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './';

// Material
import { MaterialModule } from '@angular/material';

// Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, FlexLayoutModule],
    declarations: [TitleCasePipe, TruncatePipe, ConfirmDialogComponent],
    entryComponents: [ConfirmDialogComponent],
    providers: [],
})
export class SharedModule { }
