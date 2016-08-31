import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { routing } from './home.routes';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    // routing
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
