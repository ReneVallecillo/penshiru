import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

import { LawListComponent } from './law-list';


import { SharedModule } from '../../shared/shared.module';
import { LawService } from './law.service';
import { LawContentComponent } from './law-content/law-content.component';




@NgModule({
  imports: [
    CommonModule,
    lawRouting,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    LawComponent,
    LawListComponent,
    LawContentComponent,
  ],
  providers: [
    LawService,
  ]
})
export class LawModule { }
