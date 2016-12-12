import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

import {LawListComponent} from './law-list'

@NgModule({
  imports: [
    CommonModule,
    lawRouting
  ],
  declarations: [
    LawComponent,
    LawListComponent,
  ]
})
export class LawModule { }
