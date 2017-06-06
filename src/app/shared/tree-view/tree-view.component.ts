import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { directory } from '../../models';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() directories: directory[];
  @Output() selected: EventEmitter<directory> = new EventEmitter();

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

  toggle(dir: directory) {
    dir.expanded = !dir.expanded;
  }

  check(dir: directory) {
    dir.reviewed = !dir.reviewed;
  }

  getIcon(dir: directory) {
    if (dir.expanded) {
      return '-';
    }
    return '+';
  }

  select(dir: directory) {
    if (this.checkClass(dir)) {
      this.selected.emit(dir);
    }
    this.selected.emit(dir);
  }

  checkClass(dir: directory): boolean {
    if (!dir.articles && !dir.chapters && !dir.titles) {
      return false;
    } else {
      return true;
    }
  }
}
