import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('app-home h2')).getText() as Promise<string>;
  }
}
