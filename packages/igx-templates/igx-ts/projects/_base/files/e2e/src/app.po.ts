import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getNavText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getWelcomeText(): Promise<string>  {
    return element(by.css('app-home h1')).getText() as Promise<string>;
  }
}
