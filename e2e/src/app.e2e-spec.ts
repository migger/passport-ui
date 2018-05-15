import {AppPage} from './app.po';
import {ChangeStateEventEmitterService} from "../../src/app/change-state-event-emitter.service";
import {addProviders, inject} from '@angular/core/testing';
import {$$, browser, element} from "protractor";


describe('User first visit', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it("After update with pages user sees 9 passport pages and two underfloor", () => {
    var mock = require('protractor-http-mock');
    mock([{
      request: {
        path: 'http://localhost:8080/api/state.json',
        method: 'GET'
      },
      response: {
        data: {
          "passport": {
            "page1": {
              "href": "https://cdn1.savepice.ru/uploads/2018/5/11/d627111137898c87ac373755e44c751f-full.png"
            }
          }
        }
      }
    }]);
    browser.get("/").then(() => browser.sleep(100000));
  });
});
