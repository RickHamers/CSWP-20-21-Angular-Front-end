import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AuthenticationService', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports: [FormsModule, ReactiveFormsModule, NgbModule, RouterTestingModule, HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});
