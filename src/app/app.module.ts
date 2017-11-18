import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// router
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeModule } from './components/home/home.module';
import { LawModule } from './components/law/law.module';

// providers
import { MenuService } from './shared/menu.service';
import { AuthService } from './shared/auth.service';
import { AlertService } from './shared/alert.service';
import { ToolbarService } from './shared/toolbar.service';

// Shared
import { SharedModule } from './shared/shared.module';

// Auth
import { AuthModule } from './components/auth/auth.module';

// Admin
import { AdminModule } from './components/admin/admin.module';

// Search
import { SearchModule } from './components/search/search.module';
// Covalent
import { CovalentDataTableModule } from '@covalent/core';

import 'hammerjs';

import { APP_CONFIG, AppConfig } from './config/app.config';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    routing,
    HomeModule,
    LawModule,
    AuthModule,
    AdminModule,
    SearchModule,
    CovalentDataTableModule,
  ],
  providers: [MenuService, AlertService, AuthService, ToolbarService,
    { provide: APP_CONFIG, useValue: AppConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
