import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service';
import { Observable } from 'rxjs/Observable';
import { Publication } from '../../../../models/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit {
  publications: Observable<Publication[]>;

  constructor(private publicationService: PublicationService, private router: Router) { }

  ngOnInit() {
    this.getPublications();
  }

  getPublications() {
    this.publications = this.publicationService.getPublications();
  }

  navigate(publication: Publication) {
    this.router.navigateByUrl('/publications/' + publication.id);
  }

}
