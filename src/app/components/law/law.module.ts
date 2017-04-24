import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';



import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

import { LawListComponent } from './law-list';
import { LawReviewComponent } from './law-review';
import { LawReviewDetailComponent } from './law-review-detail';
import { LawTreeComponent } from './law-tree';
import { LawReviewListComponent } from './law-review-list/law-review-list.component';
import { LawUploadComponent } from './law-upload/law-upload.component';

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
    LawReviewComponent,
    LawReviewDetailComponent,
    LawTreeComponent,
    LawReviewListComponent,
    LawUploadComponent,
  ],
})
export class LawModule { }
