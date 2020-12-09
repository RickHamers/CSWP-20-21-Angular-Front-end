import {browser, by, element} from "protractor";

export class ProfilePage {
  navigateTo() {
    return browser.get('/account/profile');
  }

  getDeleteAccountButton() {
    return element(by.name('delete-account-button'))
  }

  getModalUsernameInput() {
    return element(by.name('modal-username-input'))
  }

  getModalDeleteAccountButton() {
    return element(by.id('modal-delete-button'))
  }
}
