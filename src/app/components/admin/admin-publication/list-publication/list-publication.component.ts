import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../publication.service';
import { Observable } from 'rxjs/Observable';
import { Publication, CommonFile } from '../../../../models/';
import { Router } from '@angular/router';
import { TabService } from '../../../../shared/tab.service';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.scss']
})
export class ListPublicationComponent implements OnInit {
  publications: Observable<Publication[]>;
  files: Observable<CommonFile[]>;

  constructor(
    private publicationService: PublicationService,
    private router: Router,
    private tabService: TabService, ) { }

  ngOnInit() {
    //this.getPublications();
    this.getTmpPublications();
  }

  getPublications() {
    this.publications = this.publicationService.getPublications();
  }

  getTmpPublications() {
    this.files = this.publicationService.getTmpPub();
  }

  navigate(publication: Publication) {
    this.router.navigateByUrl('/publications/' + publication.id);
  }

  addTab(route: string) {
    this.tabService.addTab(route);
  }

}
