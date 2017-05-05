import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../../models';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() result: Result;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  navigate(result: Result) {
    let id = result.id.replace('.', '-');
    let navigationExtras: NavigationExtras = {
      fragment: id
    };
    // this.location.replaceState('/search', 'query=' + this.query);

    this.router.navigate(['/law/' + result.fields.law_id], navigationExtras);
  }

}
