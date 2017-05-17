import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, RequestOptions } from '@angular/http';

import { DocumentService } from './document.service';

let subject: DocumentService;
let backend: MockBackend;

describe('DocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: RequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject([DocumentService, MockBackend], (document, mockBackend) => {
    subject = document;
    backend = mockBackend;
  }));

  it('should be a valid instance', inject([DocumentService], (service: DocumentService) => {
    expect(service).toBeTruthy();
  }));

  it('getDocument() should get document data', (done) => {
    let document = {};
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('http://localhost:8080/api/parse/tesauro');
      expect(connection.request.method).toEqual(RequestMethod.Get);

      let options = new ResponseOptions({ body: document });
      connection.mockRespond(new Response(options));
    });
    subject.getDocument('tesauro').subscribe((response) => {
      expect(response).toEqual(document);
      done();
    });
  });

  describe('getDocuments()', () => {
    it('should return an array of Documents (Observable<Document[]>)', (done) => {
      const mockResponse = {
        data: [
          { id: 0, title: 'Tesauro' },
          { id: 1, title: 'Manual' },
          { id: 2, title: 'Procedimiento Contencioso' },
        ]
      };

      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url).toEqual('http://localhost:8080/api/documents');
        expect(connection.request.method).toEqual(RequestMethod.Get);
        let options = new ResponseOptions({ body: JSON.stringify(mockResponse) });
        connection.mockRespond(new Response(options));

      });

      subject.getDocuments().subscribe((document: Document[]) => {
        expect(document.length).toBe(3);
        expect(document[0].title).toEqual('Tesauro');
        expect(document[1].title).toEqual('Manual');
        expect(document[2].title).toEqual('Procedimiento Contencioso');
        done();
      });
    });
  });

});
