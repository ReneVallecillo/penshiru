import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminLawComponent } from './admin-law/admin-law.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { ListUserComponent } from './admin-user/list-user/list-user.component';
import { EditUserComponent } from './admin-user/edit-user/edit-user.component';

import { LawAdminService } from './admin-law/admin-law.service';
import { UserService } from './admin-user/user.service';
import { AddUserComponent } from './admin-user/add-user/add-user.component';
import { LawReviewComponent } from './admin-law/law-review/law-review.component';
import { LawReviewDetailComponent } from './admin-law/law-review-detail/law-review-detail.component';
import { LawReviewListComponent } from './admin-law/law-review-list/law-review-list.component';
import { LawTreeComponent } from './admin-law/law-tree/law-tree.component';
import { LawUploadComponent } from './admin-law/law-upload/law-upload.component';
import { AdminPublicationComponent } from './admin-publication/admin-publication.component';
import { ListPublicationComponent } from './admin-publication/list-publication/list-publication.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent, AdminLawComponent,
    AdminUserComponent, ListUserComponent,
    EditUserComponent, AddUserComponent,
    // AdminLaw
    LawReviewComponent, LawReviewDetailComponent,
    LawReviewListComponent, LawTreeComponent,
    LawUploadComponent,
    AdminPublicationComponent,
    ListPublicationComponent
  ],
  providers: [LawAdminService, UserService],
})
export class AdminModule { }
