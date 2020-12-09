import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';
import {By} from "@angular/platform-browser";

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

//  it('should display welcome message', () => {
//    page.navigateTo();
//    expect(page.getTitleText()).toEqual('cswp-angular-nr2128706-yr1920 app is running!');
//  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
