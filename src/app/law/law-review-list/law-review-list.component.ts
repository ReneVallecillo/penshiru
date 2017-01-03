import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {LawService} from '../shared/law.service'
import {Law} from '../../shared/models/law.model'
import {LawTmp} from '../../shared/models/law-tmp.model'



@Component({
  selector: 'app-law-review',
  templateUrl: './law-review-list.component.html',
  styleUrls: ['./law-review-list.component.css'],
  providers:[LawService]
})
export class LawReviewListComponent implements OnInit {

  id:number;
  errorMessage: string;
  laws$: Observable<Law[]>;
  tmpLaws: LawTmp[];

  constructor(private lawService: LawService) {}

  ngOnInit() {
    this.getLaws();
    this.getTmpLaws();
  }

  getLaws() {
    this.laws$ = this.lawService.getLaws();
  }

  getTmpLaws(){
    this.lawService.getTmpLaws()
    .subscribe(
      tmpLaws => this.tmpLaws = tmpLaws,
      error => this.errorMessage = <any>error,
      () =>    { }

    )
  }
}
