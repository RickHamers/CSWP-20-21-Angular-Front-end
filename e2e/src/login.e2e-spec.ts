import {LoginPage} from "./login.po";
import {browser, by, element, protractor} from "protractor";

describe('Login tests', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it("when login is successful — user should be redirected to the advertisements page", async() => {
    page.getUsernameTextbox().sendKeys("test");
    page.getPasswordTextbox().sendKeys("test");
    page.getLoginButton().click();

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'advertisement/index');
  });

  it("when login is unsuccessful — user should stay on the login page with an error message", async() => {
    page.getUsernameTextbox().sendKeys("thisuserdoesnotexist");
    page.getPasswordTextbox().sendKeys("thisuserdoesnotexist");
    page.getLoginButton().click();

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');
  });
});


