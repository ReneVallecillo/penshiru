import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



import { FileUploadService } from '../shared/file-upload.service';


@Component({
  selector: 'app-law-upload',
  templateUrl: './law-upload.component.html',
  styleUrls: ['./law-upload.component.css'],
  providers: [FileUploadService]
})
export class LawUploadComponent implements OnInit {

  api_domain = 'http://localhost:8080';
  end_point = '/api/tmp/laws';

  url: string = this.api_domain + this.end_point;
  uploadProgress: number;

  law: any;

  @ViewChild('fileInput') fileInput: ElementRef;

  inputTooltip = 'Click to Select File';
  toUpload: Array<File> = [];

  constructor(private renderer: Renderer, private uploadService: FileUploadService) { }

  ngOnInit() {
  }

  showInputDialog() {
    const event = new MouseEvent('click', { bubbles: true });
    event.stopPropagation();

    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement, 'dispatchEvent', [event]
    );
  }

  fileChangeEvent(fileInput: any) {
    console.log('File Changed');
    this.inputTooltip = fileInput.target.files[0].name;
    const fileList: FileList = fileInput.target.files;

    for (let i = 0; i < fileList.length; i++) {
      this.toUpload.push(fileList.item(i));
    }
  }

  parse() {
    console.log('enter parse');
    // subscribe to progress observer
    this.uploadService.getObserver()
      .subscribe(progress => {
        this.uploadProgress = progress;
      });

    this.uploadService.upload(this.url, this.toUpload)
      .subscribe(
      data => { this.law = data; },
      error => { console.log(error); },
      () => { console['table'](this.law); }

      );

  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
