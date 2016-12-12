import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {Law} from '../../shared/models/law.model';
import {Router, ActivatedRoute} from '@angular/router';
import {LawService} from '../shared/law.service';
import {ReviewService} from '../shared/review.service';
import {directory} from '../../shared/models/directory';
// import {Autosize} from 'angular2-autosize/angular2-autosize';



@Component({
  selector: 'law-review-detail',
  templateUrl: './law-review-detail.component.html',
  styleUrls: ['./law-review-detail.component.scss'],
  providers:[ReviewService]
})
export class LawReviewDetailComponent implements OnInit {
  
  private sub:any;
  law:Law;
  history:string [] = [];
  selectedIndex:number = 0;
  currentLvl: directory;


  constructor(
    private router:Router, 
    private route:ActivatedRoute,
    private service:LawService,
    private reviewService:ReviewService) {

      this.reviewService.itemSelected$.subscribe(
        dir =>{
          this.history.push(`Dir ${dir.name} was selected`)
          this.currentLvl = dir ;
        }
      )
    }

   ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => {
        let file = params['file'];
        this.service.getTmpLaw(file).subscribe(
          law => { this.law = law},
          error =>{},
          () => {console.log(this.law)}
        )
      }
    )
  }

  check(dir:directory){
        // let newState = !dir.reviewed;
        dir.reviewed = !dir.reviewed;
        console.log("change main")
        // this._changeDetectionRef.detectChanges();
        //this.checkRecursive(newState);
    }

  

}
