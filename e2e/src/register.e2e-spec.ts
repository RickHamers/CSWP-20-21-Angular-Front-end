import {LoginPage} from "./login.po";
import {browser} from "protractor";
import {RegisterPage} from "./register.po";

describe('Registration tests', () => {
  let page: RegisterPage;
  beforeEach(() => {
    page = new RegisterPage();
    page.navigateTo();
  });

  it("when registration is unsuccessful — user should stay on the register page", async() => {
    page.getUsernameTextbox().sendKeys("test");
    page.getPasswordTextbox().sendKeys("test");
    page.getLoginButton().click();

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'register');
  });
});


