import { Component, OnInit, Input } from '@angular/core';
import { directory } from '../../models';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() directories: directory[];

  constructor() { }

  ngOnInit() {
    // console.log(this.directories);
  }

  getDirectories(dir: directory): directory[] {
    console.log(dir)
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

  toggle(dir: directory) {
    dir.expanded = !dir.expanded;
  }

  check(dir: directory) {
    dir.reviewed = !dir.reviewed;
    // console.log('change tree');
    this.itemSelected(dir);

  }

  getIcon(dir: directory) {

    if (dir.expanded) {
      return '-';
    }

    return '+';
  }

  itemSelected(dir: directory) {
    if (this.checkClass(dir)) {
      // this.reviewService.announceSelected(dir);
    }
  }

  checkClass(dir: directory): boolean {
    // console.log(dir)
    if (!dir.articles && !dir.chapters && !dir.titles) {
      return false;
    } else {
      return true;

    }
  }

}
