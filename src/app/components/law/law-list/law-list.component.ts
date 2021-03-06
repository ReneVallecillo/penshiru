import { Component, OnInit } from '@angular/core';
import { LawService } from '../law.service';
import { Observable } from 'rxjs/Observable';
import { Law } from '../../../models';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-law-list',
  templateUrl: './law-list.component.html',
  styleUrls: ['./law-list.component.scss']
})
export class LawListComponent implements OnInit {
  laws: Observable<Law[]>;

  categories = [
    { name: 'Tributación', color: 'Red' },
    { name: 'Municipal', color: 'Red' },
    { name: 'Civil', color: 'Red' },
    { name: 'Penal', color: 'Red' },
    { name: 'Ejecutivo', color: 'Red' },
  ];

  constructor(
    private lawService: LawService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.laws = this.route.snapshot.params
      // (+) converts string 'id' to a number
      .switchMap((params: Params) => params['id']
        ? this.getLawsByCat(params['id'])
        : this.getLaws());
  }


  getLaws(): Observable<Law[]> {
    return this.lawService.getLaws();
  }

  getLawsByCat(id: string): Observable<Law[]> {
    return this.lawService.getLawsByCat();
  }

  navigate(law: Law) {
    this.router.navigateByUrl('/law/' + law.id);
  }
}
