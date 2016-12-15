import { Component, OnInit } from '@angular/core';


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
  laws: Law[];
  tmpLaws: LawTmp[];

  constructor(private lawService: LawService) {}

  ngOnInit() {
    this.getLaws();
    this.getTmpLaws();
  }

  getLaws(){
    this.lawService.getLaws()
      .subscribe(
        laws => this.laws = laws,
        // laws => console.log(laws),
        error => this.errorMessage = <any>error,
        () => { console.log(this.laws)}
      );
  }

  getTmpLaws(){
    this.lawService.getTmpLaws()
    .subscribe(
      tmpLaws => this.tmpLaws = tmpLaws,
      error => this.errorMessage = <any>error,
      () =>    { console.log(this.tmpLaws) }

    )
  }
}
