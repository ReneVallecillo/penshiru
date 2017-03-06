import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import {
  Law
} from '../../shared/models/law.model';
import {
  Article
} from '../../shared/models/article.model'
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  LawService
} from '../shared/law.service';
import {
  ReviewService
} from '../shared/review.service';
import {
  directory
} from '../../shared/models/directory';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
// import {Autosize} from 'angular2-autosize/angular2-autosize';



@Component({
  selector: 'law-review-detail',
  templateUrl: './law-review-detail.component.html',
  styleUrls: ['./law-review-detail.component.scss'],
  providers: [ReviewService]
})
export class LawReviewDetailComponent implements OnInit {

  private sub: any;
  law: Law;
  history: string[] = [];
  selectedIndex: number = 0;
  currentLvl: directory;

  dialogRef: MdDialogRef<ConfirmDialogComponent>;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: LawService,
    private reviewService: ReviewService,
    public dialog: MdDialog) {

    this.reviewService.itemSelected$.subscribe(
      dir => {
        this.history.push(`Dir ${dir.name} was selected`);
        this.currentLvl = dir;
      }
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let file = params['file'];
        this.service.getTmpLaw(file).subscribe(
          law => {
            this.law = law;
          },
          error => { },
          () => {
            // console.log(this.law);
          }
        );
      }
    );
  }

  check(dir: directory) {
    // let newState = !dir.reviewed;
    dir.reviewed = !dir.reviewed;
    console.log('change main');
    // this._changeDetectionRef.detectChanges();
    // this.checkRecursive(newState);
  }


  checkAll() {
    if (this.law.books) {
      for (let b of this.law.books) {
        b.reviewed = true;
        for (let t of b.titles) {
          t.reviewed = true;
          if (t.chapters.length > 0) {
            for (let c of t.chapters) {
              c.reviewed = true;
              if (c.articles.length > 0) {
                for (let a of c.articles) {
                  a.reviewed = true;
                }
              }
            }
          }
        }
      }
    } else {
      for (let t of this.law.titles) {
        t.reviewed = true;
        if (t.chapters.length > 0) {
          for (let c of t.chapters) {
            c.reviewed = true;
            if (c.articles.length > 0) {
              for (let a of c.articles) {
                a.reviewed = true;
              }
            }
          }
        }
      }
    }
  }

  checkIfAll(): boolean {
    if (this.law != null) {
      if (this.law.books) {
        for (let b of this.law.books) {
          if (b.reviewed == false) { return false; }
          for (let t of b.titles) {
            if (t.reviewed == false) { return false; }
            if (t.chapters.length > 0) {
              for (let c of t.chapters) {
                if (c.reviewed == false) { return false; }
                if (c.articles.length > 0) {
                  for (let a of c.articles) {
                    if (a.reviewed == false) { return false; }
                  }
                }
              }
            }
          }
        }
      } else {
        for (let t of this.law.titles) {
          if (t.reviewed == false) { return false; }
          if (t.chapters.length > 0) {
            for (let c of t.chapters) {
              if (c.reviewed == false) { return false; }
              if (c.articles.length > 0) {
                for (let a of c.articles) {
                  if (a.reviewed == false) { return false; }
                }
              }
            }
          }
        }
      }
    }



    if (this.law != null) {

    }
    return true;
  }

  saveToDB(law: Law) {
    this.service.saveLawDB(law)
      .subscribe(
      data => { console.log(data); },
      error => { console.log(error); }
      );
  }

  //TODO: Lookup a more eficient way
  delete(data: string, index) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
      if (this.law != null && result == 'yes') {
        this.law.titles.forEach((itemt, t) => {
          if (itemt.chapters.length > 0) {
            itemt.chapters.forEach((itemc, c) => {
              if (itemc.articles.length > 0) {
                itemc.articles.forEach((itema, a) => {
                  if (JSON.stringify(itema.name) === JSON.stringify(data)) {
                    console.log('match found');
                    this.law.titles[t].chapters[c].articles.splice(index, 1);
                    return;
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  add(data: string, index: number) {
    console.log('add called');
    if (this.law != null) {
      this.law.titles.forEach((itemt, t) => {
        if (itemt.chapters.length > 0) {
          itemt.chapters.forEach((itemc, c) => {
            if (itemc.articles.length > 0) {
              itemc.articles.forEach((itema, a) => {
                let ctrl = 0;
                if (JSON.stringify(itema.name) === JSON.stringify(data)) {
                  console.log('match found on ' + itema.name + ' and ' + index);
                  let obj: Article = {
                    id: 0,
                    name: '',
                    text: '',
                    chapterID: 0,
                    type: '',
                    reviewed: false,
                  };
                  this.law.titles[t].chapters[c].articles.splice(index, 0, obj);
                  //After slice, the if statement is called twice
                  //set data to null to avoid adding a second element
                  data = null;
                  return;
                }
              });
            }
          });
        }
      });
    }
  }

}