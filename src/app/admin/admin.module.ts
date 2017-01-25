import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminLawComponent } from './admin-law/admin-law.component';

import { LawAdminService } from './admin-law/admin-law.service';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ListUserComponent } from './admin-user/list-user/list-user.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardComponent, AdminLawComponent, AdminUserComponent, ListUserComponent],
  providers: [LawAdminService],
})
export class AdminModule { }
