import { TestBed, inject } from '@angular/core/testing';

import { LawService } from './law.service';
import { MockBackend } from '@angular/http/testing';
import { XHRBackend, HttpModule } from '@angular/http';

describe('LawService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        LawService,
        { provide: XHRBackend, UseClass: MockBackend }
      ]
    });
  });

  it('should ...', inject([LawService], (service: LawService) => {
    expect(service).toBeTruthy();
  }));
});
