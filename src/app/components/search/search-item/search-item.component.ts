import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../../models';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() result: Result;
  constructor() { }

  ngOnInit() {
  }

}
