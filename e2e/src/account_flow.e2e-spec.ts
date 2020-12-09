import {browser} from "protractor";

//Page imports
import {RegisterPage} from "./register.po";
import {LoginPage} from "./login.po";
import {ProfilePage} from "./profile.po";
import {delay} from "rxjs/operators";


describe('------- USER FLOW TESTS -------' + '\n', () => {
  let loginPage: LoginPage;
  let registerPage: RegisterPage;
  let profilePage: ProfilePage;

  beforeEach(() => {
    registerPage = new RegisterPage();
    loginPage = new LoginPage();
    profilePage = new ProfilePage();
  });

  it("Register user, login, navigate to profile & delete account", async() => {
    //Ensure navigation to the login page
    loginPage.navigateTo();

    //Look for the create account link and click it
    loginPage.getCreateAccountLink().click();

    //Register a new account
    registerPage.getUsernameTextbox().sendKeys('test_flow_user');
    registerPage.getPasswordTextbox().sendKeys('test_flow_user');
    registerPage.getCreateAccountButton().click();

    //Login with the new account
    loginPage.getUsernameTextbox().sendKeys('test_flow_user');
    loginPage.getPasswordTextbox().sendKeys('test_flow_user');
    loginPage.getLoginButton().click();

    //Navigate to the profile page after logging in
    profilePage.navigateTo();

    //Open the modal to delete the account
    profilePage.getDeleteAccountButton().click();


    //Wait for the modal to open
    browser.sleep(1000);

    //Fill in the name in the modal and click the delete button
    profilePage.getModalUsernameInput().sendKeys('test_flow_user');

    //Wait for the button to become clickable
    browser.sleep(2000);
    profilePage.getModalDeleteAccountButton().click();

    //Wait for the account to be deleted
    browser.sleep(2000);

    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + 'login');
  });
});


