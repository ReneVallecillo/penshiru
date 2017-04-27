import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

import { LawListComponent } from './law-list';


import { SharedModule } from '../../shared/shared.module';




@NgModule({
  imports: [
    CommonModule,
    lawRouting,
    MaterialModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    LawComponent,
    LawListComponent,
  ],
})
export class LawModule { }
