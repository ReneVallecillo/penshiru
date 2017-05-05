import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() query: Observable<string>;
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
  @Input() options: Observable<string[]>;
  stateCtrl = new FormControl();
  values$: Observable<any>;

  constructor() { }

  ngOnInit() {
    // The "(change)='search.emit($event.target.value)'" on the html method doesn't always send the right value
    this.values$ = this.stateCtrl.valueChanges;
    this.values$.subscribe((value) => this.search.emit(value));
    this.query.subscribe(
      value => this.stateCtrl.setValue(value)
    )

  }
}
