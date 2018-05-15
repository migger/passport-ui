import {Component, Input, OnInit} from '@angular/core';
import {ChangeStateEventEmitterService} from '../change-state-event-emitter.service';


@Component({
  selector: 'app-passport-page-view',
  templateUrl: './passport-page-view.component.html',
  styleUrls: ['./passport-page-view.component.css']
})
export class PassportPageViewComponent implements OnInit {
  private pageByType = {
    '2-3': 'page1',
    '4-5': 'page2',
    '6-7': 'page3',
    '8-9': 'page4',
    '10-11': 'page5',
    '12-13': 'page6',
    '14-15': 'page7',
    '16-17': 'page8',
    '18-19': 'page9'
  };

  @Input()
  type: string = undefined;

  @Input()
  page: any;

  backgroundColor = 'white';

  constructor(private changeStateEventEmitterService: ChangeStateEventEmitterService) {
    changeStateEventEmitterService.emitter.subscribe((data) => this.stateUpdated(data));
  }

  stateUpdated(state) {
    if (this.type) {
      if (state.passport) {
        const pageName = this.pageByType[this.type];
        if (pageName in state.passport) {
          this.page = state.passport[pageName];
          this.updateBackground();
          return;
        }
      }
      this.page = {'href': require('./img/' + this.type + '.png')};
    }
  }

  ngOnInit(): void {
    if (this.type && !this.page) {
      this.page = {'href': require('./img/' + this.type + '.png')};
    }
    this.updateBackground();
  }

  private updateBackground() {
    if (this.page) {
      if ('state' in this.page) {
        switch (this.page.state) {
          case 'error':
            this.backgroundColor = 'red';
            break;
          case 'processing':
            this.backgroundColor = 'yellow';
            break;
          default:
            this.backgroundColor = 'white';
            break;
        }
      }
    }
  }
}
