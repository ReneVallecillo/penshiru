import { Component, OnInit } from '@angular/core';
import { Publication, directory } from '../../../../models';
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
  current: directory;
  jsonRegex = new RegExp('.json$');
  allreviewed = false;

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

  select(dir: directory) {
    this.current = dir;
  }

  checkAll(dir: directory) {
    dir.reviewed = true
    if (dir.paragraph) {
      for (const p of dir.paragraph) {
        p.checked = true;
      }
    }

    for (const currentdir of dir.titles) {
      currentdir.reviewed = true;
      if (currentdir.titles) {
        this.checkAll(currentdir);
      }
    }
  }

  checkIfAll(dir: directory): boolean {
    console.log('called')
    if (dir) {
      if (!dir.reviewed) {
        console.log('aca salio:')
        console.log(dir.name);
        return false;
      }
      // if (dir.paragraph) {
      //   for (const p of dir.paragraph) {
      //     if (!p.checked) {
      //       return false;
      //     }
      //   }
      // }
      for (const currentdir of dir.titles) {
        if (!currentdir.reviewed) {
          console.log('aca salio:')
          console.log(currentdir.name);
          return false
        }
        if (currentdir.titles) {
          return this.checkIfAll(currentdir);
        }
      }
      return true;
    }

  }

  saveToDB() {

  }

}

