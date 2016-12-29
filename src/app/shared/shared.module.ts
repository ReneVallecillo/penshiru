import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TitleCasePipe, TruncatePipe} from './';

// Material
import {MaterialModule} from '@angular/material';

@NgModule({
    imports: [CommonModule, MaterialModule],
    exports: [TitleCasePipe, TruncatePipe, MaterialModule],
    declarations: [TitleCasePipe, TruncatePipe],
    providers: [],
})
export class SharedModule { }
