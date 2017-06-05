import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaterialModule } from '@angular/material';
// USE TO NOT TEST ROUTER
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MenuService } from './shared/menu.service';
import { ToolbarService } from './shared/toolbar.service';





describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;


  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MaterialModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        MenuService, ToolbarService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('should have expected <h1> text', async(() => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.appName'));
    el = de.nativeElement;
    expect(el.innerText).toMatch('Penshiru');
  }));
});
