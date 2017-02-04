import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminLawComponent } from './admin-law/admin-law.component';

import { AdminUserComponent } from './admin-user/admin-user.component';
import { ListUserComponent } from './admin-user/list-user/list-user.component';
import { EditUserComponent } from './admin-user/edit-user/edit-user.component';

import { LawAdminService } from './admin-law/admin-law.service';
import { UserService } from './admin-user/user.service';
import { AddUserComponent } from './admin-user/add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardComponent, AdminLawComponent, AdminUserComponent, ListUserComponent, EditUserComponent, AddUserComponent],
  providers: [LawAdminService, UserService],
})
export class AdminModule { }
