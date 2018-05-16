import {Component, OnInit} from '@angular/core';
import {ChangeStateEventEmitterService} from "../change-state-event-emitter.service";
import {UploadFileService} from "../upload-file.service";

@Component({
  selector: 'app-unknown-pages-view',
  templateUrl: './unknown-pages-view.component.html',
  styleUrls: ['./unknown-pages-view.component.css']
})
export class UnknownPagesViewComponent implements OnInit {
  loadingArray: any[] = [];
  pagesArray: any[] = [];

  constructor(private changeStateEventEmitterService: ChangeStateEventEmitterService, uploadFileService: UploadFileService) {
    changeStateEventEmitterService.emitter.subscribe((data) => this.stateUpdated(data));
    uploadFileService.startedEmitter.subscribe((data) => {
      const item = {data: data, progress: 0.0, name: data.name, error: null};
      const array = this.loadingArray;
      array.push(item);
      data.progress.subscribe((e) => item.progress = e.progress);
      data.finish.subscribe(() => array.splice(array.indexOf(item), 1));
      data.error.subscribe(() => {
        item.error = "Не могу загрузить этот файл! :'(";
        setTimeout(() => array.splice(array.indexOf(item), 1), 5000)
      });
    })
  }

  ngOnInit() {
  }

  private stateUpdated(state: any) {
    console.log(state);
    if (state.underfloor) {
      this.pagesArray = state.underfloor;
    }
    else {
      this.pagesArray = [];
    }
  }
}
