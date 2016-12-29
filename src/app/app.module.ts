import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// router
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LawModule } from './law/law.module';

// providers
import {MenuService} from './shared/menu.service';
import {AuthService} from './shared/auth.service';
import {AlertService} from './shared/alert.service';

// Material
import {MaterialModule} from '@angular/material';

// Shared
import { SharedModule } from './shared/shared.module';

// Auth
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    SharedModule,
    routing,
    HomeModule,
    LawModule,
    AuthModule,
  ],
  providers: [MenuService, AlertService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
