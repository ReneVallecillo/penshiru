import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBoxComponent } from './searchbox/searchbox.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { SearchService } from './search.service';

@NgModule({
  imports: [
    SearchRoutingModule,
    SharedModule,
  ],
  declarations: [SearchBoxComponent, SearchComponent, SearchListComponent, SearchItemComponent],
  providers: [SearchService]
})
export class SearchModule { }
