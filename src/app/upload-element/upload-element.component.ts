import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-element',
  templateUrl: './upload-element.component.html',
  styleUrls: ['./upload-element.component.css']
})
export class UploadElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectFile() {
    let inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.multiple = true;
    inputElement.onchange = (event) => console.log(event);
    inputElement.click();
  }
}
