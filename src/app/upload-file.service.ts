import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";



@Injectable()
export class UploadFileService {
  static URL = "http://localhost:8080/api/file";
  startedEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient) {
  }

  uploadFiles(files: any[]): void {
    for (let i = 0; i < files.length; i++) {


      const errorEmitter = new EventEmitter();
      let formData = new FormData();
      formData.append("file", new Blob([files[i]]), files[i].name);
      let headers = new HttpHeaders();
      headers.append("Content-Type", "multipart/form-data");

      this.http.post(UploadFileService.URL, formData, {
        headers: headers,
        reportProgress: true,
        observe: 'events'
      }).subscribe(
        this.eventHandler(this.startedEmitter, errorEmitter, files[i]),
        (error) => {
          errorEmitter.emit({})
        })
      ;
    }
  }

  eventHandler(startedEmitter: EventEmitter<any>, errorEmitter, file) {
    const progressEmittrer = new EventEmitter();
    const finishEmitter = new EventEmitter();
    return (event) => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        startedEmitter.emit({
          progress: progressEmittrer,
          finish: finishEmitter,
          error: errorEmitter,
          name: file.name
        })
      }

      if (event.type === HttpEventType.UploadProgress) {
        progressEmittrer.emit({progress: event.loaded / event.total})
      }

      if (event.type === HttpEventType.Response) {
        finishEmitter.emit({})
      }
    }
  }
}
