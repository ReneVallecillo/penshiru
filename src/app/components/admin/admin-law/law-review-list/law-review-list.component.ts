import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LawService } from '../shared/law.service';

import { Law, CommonFile } from '../../../../models/';
import { LawAdminService } from '../admin-law.service';



@Component({
  selector: 'app-law-review',
  templateUrl: './law-review-list.component.html',
  styleUrls: ['./law-review-list.component.css'],
  // TODO: Review if needs to be at module lvl.
  providers: [LawService],
})
export class LawReviewListComponent implements OnInit {

  id: number;
  errorMessage: string;
  laws$: Observable<Law[]>;
  tmpLaws: CommonFile[];

  constructor(
    private lawService: LawService,
    private lawAdminService: LawAdminService) { }

  ngOnInit() {
    this.getLaws();
    this.getTmpLaws();
  }

  getLaws() {
    this.laws$ = this.lawService.getLaws();
  }

  getTmpLaws() {
    this.lawService.getTmpLaws()
      .subscribe(
      tmpLaws => this.tmpLaws = tmpLaws,
      error => this.errorMessage = <any>error,
      () => { }
      );
  }

  addTab(route: string) {
    this.lawAdminService.addTab(route);
  }
}
