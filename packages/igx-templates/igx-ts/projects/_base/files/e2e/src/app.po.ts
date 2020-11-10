import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getNavText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  async getWelcomeText(): Promise<string>  {
    return element(by.css('app-home h1')).getText();
  }
}
