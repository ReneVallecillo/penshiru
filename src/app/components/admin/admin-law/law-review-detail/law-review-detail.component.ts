import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ApplicationRef,
  Input
} from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Law, Article, directory } from '../../../../models/';

import { Router, ActivatedRoute } from '@angular/router';
import { LawService } from '../shared/law.service';
import { ReviewService } from '../shared/review.service';
import { LawAdminService } from '../admin-law.service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm-dialog.component';


// import {Autosize} from 'angular2-autosize/angular2-autosize';

interface Iteratable {
  name: string;
  type: string;
}


@Component({
  selector: 'law-review-detail',
  templateUrl: './law-review-detail.component.html',
  styleUrls: ['./law-review-detail.component.scss'],
  providers: [ReviewService]
})
export class LawReviewDetailComponent implements OnInit {

  private sub: any;
  intro = true;
  @Input() law: Law;
  history: string[] = [];
  selectedIndex: number = 0;
  currentLvl: directory;
  currentFile: string;

  jsonRegex = new RegExp('.json$');


  dialogRef: MatDialogRef<ConfirmDialogComponent>;



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: LawService,
    private reviewService: ReviewService,
    private lawAdminService: LawAdminService,
    public dialog: MatDialog,
    private ref: ApplicationRef) {

    this.reviewService.itemSelected$.subscribe(
      dir => {
        // this.history.push(`Dir ${dir.name} was selected`);
        this.currentLvl = dir;
        this.intro = false
      }
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        this.currentFile = params['file'];
        if (this.jsonRegex.test(this.currentFile)) {
          this.service.getTmpLaw(this.currentFile).subscribe(
            law => {
              this.law = law;
            },
            error => { },
          );
        } else {
          this.service.getLaw(this.currentFile).subscribe(
            law => this.law = law,
            error => console.log(error),
            () => console.log(this.law)
          );
        }
      }

    );
    this.subReview();
  }


  subReview() {
    this.reviewService.law$.subscribe(
      law => {
        this.law = law;
        console.log('new version');
        console.log(law);
      }
    );
  }

  check(dir: directory) {
    dir.reviewed = !dir.reviewed;
  }


  checkAll() {
    try {


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
    } catch (e) {
      console.log(e);
    }
  }

  checkIfAll(): boolean {
    try {


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
                      if (a.reviewed === false) { return false; }
                    }
                  }
                }
              }
            }
          }
        } else {
          for (let t of this.law.titles) {
            if (t.reviewed === false) { return false; }
            if (t.chapters.length > 0) {
              for (let c of t.chapters) {
                if (c.reviewed === false) { return false; }
                if (c.articles.length > 0) {
                  for (let a of c.articles) {
                    if (a.reviewed === false) { return false; }
                  }
                }
              }
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }



    if (this.law != null) {

    }
    return true;
  }

  saveToDB(law: Law) {
    law.init = this.currentFile;
    this.service.saveLawDB(law)
      .subscribe(
      data => {
        console.log(data);
        this.lawAdminService.delTab(this.currentFile);
      },
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
      if (this.law != null && result === 'yes') {
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
                  // set data to null to avoid adding a second element
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

  update(uri: string) {
    this.service.saveTmpLaw(uri, this.law).subscribe(
      law => this.law = law
    );
  }

  showIntro() {
    this.intro = true;
    this.currentLvl = null;
  }

  // https://github.com/Microsoft/TypeScript/wiki/'this'-in-TypeScript
  delItem = (data: string, index: number, item: Iteratable, ...indexes: number[]): boolean => {
    return this.reviewService.delItem(this.law, data, index, item, indexes);
  }


  del(data: string, index: number) {
    let action = this.delItem;
    this.loop(data, index, action);
  }

  // Loops through law data
  private loop(data: string, index: number, action) {
    let match: boolean;
    let currentLaw = this.law;
    try {
      if (this.law) {
        if (this.law.books) {
          let b = 0;
          for (let book of this.law.books) {
            book.type = 'Book';
            match = action(data, index, book, b);
            if (match) {
              return;
            }
            if (book.titles) {
              let t = 0;
              for (let title of book.titles) {
                title.type = 'Title';
                match = action(data, index, title, b, t);
                if (match) {
                  return;
                }
                // t++;
                if (title.chapters) {
                  let c = 0;
                  for (let chapter of title.chapters) {
                    chapter.type = 'Chapter';
                    match = action(data, index, chapter, b, t, c);
                    if (match) {
                      return;
                    }
                    // c++;
                    if (chapter.articles) {

                      let a = 0;
                      for (let article of chapter.articles) {
                        article.type = 'Article';
                        match = action(data, index, article, b, t, c, a);
                        if (match) {
                          return;
                        }
                        a++;
                      }
                    }
                    c++;
                  }
                }
                t++;
              }
            }
            b++;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
}
