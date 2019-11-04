import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWelcomeText() {
    return element(by.css('app-home h2')).getText() as Promise<string>;
  }
}
