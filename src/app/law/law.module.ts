import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { lawRouting } from './law.routing';
import { LawComponent } from './law.component';

@NgModule({
  imports: [
    CommonModule,
    lawRouting
  ],
  declarations: [
    LawComponent
  ]
})
export class LawModule { }
