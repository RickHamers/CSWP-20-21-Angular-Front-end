import { TestBed } from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { AdvertisementService } from './advertisement.service';
import {AuthenticationService} from './authentication.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AdvertisementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthenticationService],
    imports: [FormsModule, ReactiveFormsModule, NgbModule, RouterTestingModule, HttpClientModule]
  }));

  it('should be created', () => {
    const service: AdvertisementService = TestBed.get(AdvertisementService);
    expect(service).toBeTruthy();
  });
});
