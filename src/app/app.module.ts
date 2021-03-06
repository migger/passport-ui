import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PassportPageViewComponent} from './passport-page-view/passport-page-view.component';

import {MatCardModule} from "@angular/material/card";
import {ChangeStateEventEmitterService} from "./change-state-event-emitter.service";
import {UnknownPagesViewComponent} from './unknown-pages-view/unknown-pages-view.component';
import {UploadElementComponent} from './upload-element/upload-element.component';
import {MatButtonModule, MatProgressBarModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {UploadFileService} from "./upload-file.service";
import {createCustomElement} from "@angular/elements";


@NgModule({
  declarations: [
    AppComponent,
    PassportPageViewComponent,
    UnknownPagesViewComponent,
    UploadElementComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [

    // HttpClient,
    ChangeStateEventEmitterService,
    UploadFileService
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
   constructor(private injector: Injector) {
     const customComponent = createCustomElement(AppComponent, {injector});
     customElements.define("passport-ui", customComponent);
   }

   ngDoBootstrap() {

   }
}
