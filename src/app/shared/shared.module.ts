import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TitleCasePipe, TruncatePipe} from './';

@NgModule({
    imports: [CommonModule],
    exports: [TitleCasePipe, TruncatePipe],
    declarations: [TitleCasePipe, TruncatePipe],
    providers: [],
})
export class SharedModule { }
