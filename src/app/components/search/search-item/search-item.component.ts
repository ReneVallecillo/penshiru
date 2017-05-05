import { Component, OnInit, Input } from '@angular/core';
import { Result } from '../../../models';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() result: Result;
  constructor(private router: Router) { }

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
