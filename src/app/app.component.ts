import {Component, HostListener} from '@angular/core';
import {UploadFileService} from "./upload-file.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d = false;
  uploadFileService: UploadFileService;

  constructor(uploadFileService: UploadFileService) {
    this.uploadFileService = uploadFileService;
  }

  @HostListener("dragenter", ['$event'])
  dragEnter(event) {
    this.d = true;
    event.preventDefault()
  }

  @HostListener("dragleave", ['$event'])
  dragLeave(event) {
    if (event.target.className.indexOf("passport-view-dropzone") >= 0) {
      this.d = false;
      event.preventDefault()
    }
  }

  @HostListener("drop", ['$event'])
  drop(event) {
    event.preventDefault();
    this.d = false;
    this.test(event.dataTransfer.files);
  }

  test(files) {
    this.uploadFileService.uploadFiles(files);
  }

  @HostListener("dragover", ['$event'])
  dragOver(event) {
    event.preventDefault();
  }
}
