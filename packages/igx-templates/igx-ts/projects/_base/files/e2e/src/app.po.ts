import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getNavText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getWelcomeText() {
    return element(by.css('app-home h1')).getText() as Promise<string>;
  }
}
