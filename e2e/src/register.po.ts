import {browser, by, element} from "protractor";

export class RegisterPage {
  navigateTo() {
    return browser.get('/register');
  }

  getUsernameTextbox() {
    return element(by.name('username-input'));
  }
  getPasswordTextbox() {
    return element(by.name('password-input'));
  }

  getLoginButton() {
    return element(by.name('submit-button'))
  }
}
