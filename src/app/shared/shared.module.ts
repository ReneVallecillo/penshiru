import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TitleCasePipe, TruncatePipe } from './';

// Material
import { MaterialModule } from '@angular/material';

// Layout
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule, FlexLayoutModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule, FlexLayoutModule],
    declarations: [TitleCasePipe, TruncatePipe],
    providers: [],
})
export class SharedModule { }
