import {$$, browser, by, element} from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/').then(()=>browser.wait($$("asd"), 10000));

  }

  containsAllSources() {
    let base64ImgesCount = 0;
    let promises = [];
    $$("img").then((imgs) => {
      imgs.forEach((e) => {
        promises.push(e.getAttribute("src").then((src) => {
          console.log(src);
          if (src.indexOf('data:image/png;base64') >= 0) {
            base64ImgesCount++;
          }
        }));
      })
    }).then(() => {
      Promise.all(promises).then(() => expect(base64ImgesCount).toBe(9))
    });
  }

  containsUploadButton() {
    let uploadButton = false;
    let promises = [];
    $$("button")
      .then((buttons) =>
        buttons.forEach((button) => {
          promises.push(button.getText().then((text) => uploadButton = uploadButton || text === "Загрузить"));
        }))
      .then(() => {
        Promise.all(promises).then(() => expect(uploadButton).toBe(true))
      });
  }
}
