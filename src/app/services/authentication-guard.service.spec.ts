import { TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';


import { AuthenticationGuardService } from './authentication-guard.service';
import {AuthenticationService} from './authentication.service';

describe('AuthenticationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthenticationService],
    imports: [FormsModule, ReactiveFormsModule, NgbModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: AuthenticationGuardService = TestBed.get(AuthenticationGuardService);
    expect(service).toBeTruthy();
  });
});
