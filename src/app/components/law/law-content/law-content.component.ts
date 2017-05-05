import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Law } from '../../../models';
import { LawService } from '../law.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-law-content',
  templateUrl: './law-content.component.html',
  styleUrls: ['./law-content.component.scss']
})
export class LawContentComponent implements OnInit, AfterViewChecked {

  law: Observable<Law>;

  constructor(private route: ActivatedRoute, private lawService: LawService) { }

  ngOnInit() {
    this.law = this.route.params
      .switchMap((params: Params) => this.getLawbyID(+params['id']));
  }

  getLawbyID(id: number): Observable<Law> {
    return this.lawService.getLawbyID(id);
  }

  ngAfterViewChecked() {
    this.route.fragment.subscribe(f => {
      console.log(f);
      const element = document.querySelector('#' + f);
      console.log(element);

      if (element) {
        element.scrollIntoView(element);
      }
    })
  }
}
