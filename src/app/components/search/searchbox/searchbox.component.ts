import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-search-box',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
  @Input() options: Observable<string[]>;

  constructor() { }

  ngOnInit() {
  }
}
