import { Component, OnInit, ViewChild, ElementRef, Renderer, Input } from '@angular/core';
import { FileUploadService } from '../file-upload/file-upload.service';
import { FileUpload2Service, UploadEvent } from './file-upload2.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [FileUploadService]
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  @Input() endpoint: string;

  inputTooltip = 'Click to Select File';
  toUpload: Array<File> = [];
  uploadProgress: number;



  constructor(
    private renderer: Renderer,
    private uploadService: FileUpload2Service
  ) { }

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
    // this.uploadService.getObserver()
    //   .subscribe(progress => {
    //     this.uploadProgress = progress;
    //   });

    // this.uploadService.upload(this.endpoint, this.toUpload)
    //   .subscribe(

    //   );
    this.uploadService.upload({
      url: this.endpoint,
      files: this.toUpload,
      filesKey: 'uploads[]'
    }).subscribe(
      (event: UploadEvent) => {
        console.log(event);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      });
  }

}
