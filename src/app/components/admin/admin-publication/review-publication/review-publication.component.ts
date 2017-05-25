import { Component, OnInit } from '@angular/core';
import { Publication } from '../../../../models';
import { ActivatedRoute } from '@angular/router';
import { PublicationService } from '../publication.service';

@Component({
  selector: 'app-review-publication',
  templateUrl: './review-publication.component.html',
  styleUrls: ['./review-publication.component.scss']
})
export class ReviewPublicationComponent implements OnInit {

  pub: Publication;
  currentFile: string;
  jsonRegex = new RegExp('.json$');

  constructor(
    private route: ActivatedRoute,
    private pubService: PublicationService,
  ) { }


  ngOnInit() {
    this.getPublication();
  }

  getPublication() {
    this.route.params.subscribe(
      params => {
        this.currentFile = params['name'];
        if (this.jsonRegex.test(this.currentFile)) {
          this.pubService.getTmpPublication(this.currentFile).subscribe(
            pub => {
              this.pub = pub;
              console.log(this.pub)
            },
            error => { },
          );
        }
      });
  }
}

