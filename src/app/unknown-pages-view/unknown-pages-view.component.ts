import { Component, OnInit } from '@angular/core';
import {ChangeStateEventEmitterService} from "../change-state-event-emitter.service";

@Component({
  selector: 'app-unknown-pages-view',
  templateUrl: './unknown-pages-view.component.html',
  styleUrls: ['./unknown-pages-view.component.css']
})
export class UnknownPagesViewComponent implements OnInit {
  pagesArray: any[];

  constructor(private changeStateEventEmitterService: ChangeStateEventEmitterService) {
    changeStateEventEmitterService.emitter.subscribe((data) => this.stateUpdated(data));
  }

  ngOnInit() {
  }

  private stateUpdated(state: any) {
    console.log(state);
    if(state.underfloor) {
      this.pagesArray = state.underfloor;
    }
    else {
      this.pagesArray =  [];
    }
  }
}
