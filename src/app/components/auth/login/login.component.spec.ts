import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginButton, usernameInput, passwordInput: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule, NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginButton = fixture.debugElement.query(By.css('#login-button'));
    usernameInput = fixture.debugElement.query(By.css('#username-input'));
    passwordInput = fixture.debugElement.query(By.css('#password-input'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have buttons disabled on loadup',() => {
    expect(loginButton.nativeElement.disabled).toEqual(true);
  });

  it('should enable the button when email and password text is inputted',() => {
    usernameInput.nativeElement.value = 'test';
    passwordInput.nativeElement.value = 'test';
    usernameInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(loginButton.nativeElement.disabled).toEqual(false);
  });
});
