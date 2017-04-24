import { ModuleWithProviders }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LawComponent } from './law.component';
import { LawListComponent } from './law-list';
import {LawReviewComponent} from './law-review/law-review.component';
import {LawReviewDetailComponent} from './law-review-detail/law-review-detail.component';
import {LawTreeComponent} from './law-tree/law-tree.component';
import {LawReviewListComponent} from './law-review-list/law-review-list.component';
import {LawUploadComponent} from './law-upload/law-upload.component';

const LawRouter: Routes = [
  { path: 'list', component: LawListComponent },
  // {
  //   path: '',
  //   redirectTo: 'law',
  //   pathMatch: 'full',
  // },
  {
    path: 'law',
    component: LawComponent,
    children: [
      {
        path: 'upload',
        component: LawUploadComponent
      },
      {
        path: 'review',
        component: LawReviewComponent,
        children: [
          {
            path: ':file',
            component: LawReviewDetailComponent
          },
          {
            path: 'tree',
            component: LawTreeComponent
          },
          {
            path: '',
            component: LawReviewListComponent
          }
        ]
      },
      {
        path: '',
        component: LawListComponent,
      }
    ]
  }
];

export const lawRouting:ModuleWithProviders =
RouterModule.forChild(LawRouter);
