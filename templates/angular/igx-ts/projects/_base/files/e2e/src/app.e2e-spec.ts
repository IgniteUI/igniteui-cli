import { AppPage } from './app.po';

describe('$(name) App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getWelcomeText()).toEqual('Welcome to Ignite UI for Angular');
  });
});
