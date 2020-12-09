import {browser, by, element} from "protractor";

export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getUsernameTextbox() {
    return element(by.name('username-input'));
  }
  getPasswordTextbox() {
    return element(by.name('password-input'));
  }

  getLoginButton() {
    return element(by.name('login-button'))
  }

  getLocalStorageObject(key) {
    return browser.executeScript(`return window.localStorage.getItem(arguments[0]);`, key);
  }
}
