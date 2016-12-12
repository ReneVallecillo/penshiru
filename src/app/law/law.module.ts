import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

import {LawListComponent} from './law-list'
import {LawReviewComponent} from './law-review'


@NgModule({
  imports: [
    CommonModule,
    lawRouting
  ],
  declarations: [
    LawComponent,
    LawListComponent,
    LawReviewComponent,
  ]
})
export class LawModule { }
