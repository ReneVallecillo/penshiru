import { Component, OnInit } from '@angular/core';


import {LawService} from '../shared/law.service'


@Component({
  selector: 'app-law-review',
  templateUrl: './law-review.component.html',
  styleUrls: ['./law-review.component.css'],
  providers:[LawService],
})
export class LawReviewComponent implements OnInit {
  title = 'Review Law'
  constructor(  private service:LawService  ) {}

  
  ngOnInit() {

  }
  
}
