import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
  ],
  declarations: [SearchBoxComponent, SearchComponent]
})
export class SearchModule { }
