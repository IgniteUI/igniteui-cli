import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('app-home h1')).getText() as Promise<string>;
  }
}
