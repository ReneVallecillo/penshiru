import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLawComponent } from './admin-law/admin-law.component';

import { LawComponent } from '../law/law.component';
import { LawListComponent } from '../law/law-list';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { ListUserComponent } from './admin-user/list-user/list-user.component';
import { EditUserComponent } from './admin-user/edit-user/edit-user.component';
import { AddUserComponent } from './admin-user/add-user/add-user.component';
import { LawReviewListComponent } from './admin-law/law-review-list/law-review-list.component';
import { LawReviewComponent } from './admin-law/law-review/law-review.component';
import { LawReviewDetailComponent } from './admin-law/law-review-detail/law-review-detail.component';
import { LawTreeComponent } from './admin-law/law-tree/law-tree.component';
import { LawUploadComponent } from './admin-law/law-upload/law-upload.component';
import { AdminPublicationComponent } from './admin-publication/admin-publication.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'law',
        component: AdminLawComponent,
        children: [
          {
            path: '',
            component: LawReviewListComponent
          },
          {
            path: 'list',
            component: LawReviewListComponent,
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
            path: 'upload',
            component: LawUploadComponent
          },
        ]
      },
      {
        path: 'users',
        component: AdminUserComponent,
        children: [
          {
            path: '',
            component: ListUserComponent,
          },
          {
            path: 'list',
            component: ListUserComponent,
          },
          {
            path: 'add',
            component: AddUserComponent,
          },
          {
            path: ':id',
            component: EditUserComponent,
          }
        ]
      },
      {
        path: 'publications',
        component: AdminPublicationComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

