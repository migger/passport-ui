import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class ChangeStateEventEmitterService {
  emitter = new EventEmitter();


  constructor(http: HttpClient) {
    setInterval(() => {
      http.get("http://localhost:8080/api/state.json").subscribe((data) => {
        this.emitter.emit(data)
      }, (error) => {
        console.log(error)
      })
    }, 1000)
  }
}
