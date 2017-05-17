import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawContentComponent } from './law-content.component';
import { MdCardModule } from '@angular/material';
import { ActivatedRouteStub } from '../../../testing/router-stubs';
import { ActivatedRoute } from '@angular/router';
import { LawService } from '../law.service';
import { LawServiceStub } from '../../../testing/law-stub';


describe('LawContentComponent', () => {
  let component: LawContentComponent;
  let fixture: ComponentFixture<LawContentComponent>;

  let activatedRoute: ActivatedRouteStub;


  beforeEach(async(() => {
    //Check how to inject propertly
    activatedRoute = new ActivatedRouteStub();

    TestBed.configureTestingModule({
      declarations: [LawContentComponent],
      imports: [MdCardModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: LawService, useClass: LawServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testParams = { id: 99999 };
    fixture = TestBed.createComponent(LawContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
