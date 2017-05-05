import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../../models';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() result: Result;
  @Input() query: string;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  navigate(result: Result) {
    let id = result.id.replace('.', '-');
    let navigationExtras: NavigationExtras = {
      fragment: id
    };
    this.router.navigate(['/law/' + result.fields.law_id], navigationExtras);
  }

}
