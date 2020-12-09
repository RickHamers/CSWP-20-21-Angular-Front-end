import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let submitButton, usernameInput, passwordInput: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    submitButton = fixture.debugElement.query(By.css('#submit-button'));
    usernameInput = fixture.debugElement.query(By.css('#username-input'));
    passwordInput = fixture.debugElement.query(By.css('#password-input'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have buttons disabled on loadup',() => {
    expect(submitButton.nativeElement.disabled).toEqual(true);
  });

  it('should enable the button when email and password text is inputted',() => {
    usernameInput.nativeElement.value = 'test';
    passwordInput.nativeElement.value = 'test';
    usernameInput.nativeElement.dispatchEvent(new Event('input'));
    passwordInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(submitButton.nativeElement.disabled).toEqual(false);
  });
});
