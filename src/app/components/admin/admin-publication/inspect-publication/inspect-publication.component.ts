import { Component, OnInit, Input } from '@angular/core';
import { directory, PublicationT } from '../../../../models';

@Component({
  selector: 'app-inspect-publication',
  templateUrl: './inspect-publication.component.html',
  styleUrls: ['./inspect-publication.component.scss']
})
export class InspectPublicationComponent implements OnInit {

  @Input() current: directory

  constructor() { }

  ngOnInit() {
  }

  getDirectories(dir: directory): directory[] {
    if (dir) {
      if (dir.books) {
        return dir.books;
      } else if (dir.titles) {
        return dir.titles;
      } else if (dir.chapters) {
        return dir.chapters;
      } else {
        return null;
      }
    }
  }

  check(dir: directory) {
    dir.reviewed = !dir.reviewed;
  }

}
