import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() query = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
