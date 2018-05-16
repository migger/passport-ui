import {Component, EventEmitter, Injectable, OnInit} from '@angular/core';
import {UploadFileService} from "../upload-file.service";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-upload-element',
  templateUrl: './upload-element.component.html',
  styleUrls: ['./upload-element.component.css']
})
export class UploadElementComponent implements OnInit {
  constructor(private uploadFileService: UploadFileService) {

    console.log(uploadFileService);

  }

  ngOnInit() {
  }

  selectFile() {
    let inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.multiple = true;
    inputElement.onchange = (event) => {
      this.uploadFileService.uploadFiles(event.target["files"]);
    };
    inputElement.click();
  }
}
