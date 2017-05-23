import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { APP_CONFIG, Config } from '../../config/app.config';


@Injectable()
export class FileUploadService {
  /**
   * @param Observable<number>
   */
  private progress$: Observable<number>;

  /**
   * @type {number}
   */
  private progress = 0;

  private progressObserver: any;

  constructor(
    @Inject(APP_CONFIG) private config: Config
  ) {
    this.progress$ = new Observable<number>(observer => {
      this.progressObserver = observer;
    });
  }

  /**
   * @returns {Observable<number>}
   */
  public getObserver(): Observable<number> {
    return this.progress$;
  }

  /**
   * Upload files throught XMLHttpRequest
   *
   * @param url
   * @param files
   * @returns {Observable<T>}
   *
   */
  public upload(url: string, files: File[]): Observable<Response> {
    return Observable.create((observer) => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
      FileUploadService.setUploadUpdateInterval(500);

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.progressObserver.next(this.progress);
      };

      xhr.open('POST', this.config.apiEndpoint + url, true);

      xhr.send(formData);
    });
  }

  /**
   * Set interval for frequency with which observable will share data with the subscribers
   *
   * @param interval
   */
  private static setUploadUpdateInterval(interval: number): void {
    setInterval(() => { }, interval);
  }

}


