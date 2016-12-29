import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {TitleCasePipe, TruncatePipe} from './';

// Material
import {MaterialModule} from '@angular/material';

@NgModule({
    imports: [CommonModule, MaterialModule, FormsModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule, FormsModule],
    declarations: [TitleCasePipe, TruncatePipe],
    providers: [],
})
export class SharedModule { }
