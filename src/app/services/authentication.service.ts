// Rick Hamers - 2019-11-13 15:21
// authentication.service.ts - provide authentication functionality & utility

import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private httpclient: HttpClient
  ) {
    this.checkTokenExpiration();
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- LOCALSTORAGE & HEADERS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  createHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.returnToken()
    });
  }

  private saveCredentials(credentials) {
    localStorage.setItem('x-access-token', credentials.token);
    localStorage.setItem('expiresAt', credentials.expiresAt);
    localStorage.setItem('username', credentials.username);
    localStorage.setItem('userID', credentials.id);
    this.isLoggedIn$.next(true);
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- TOKEN -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  private checkTokenExpiration() {
    const expired = moment().isBefore(this.returnExpirationDate());
    this.isLoggedIn$.next(expired);
    return expired;
  }

  private returnExpirationDate() {
    const expirationDate = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expirationDate);
    return moment(expiresAt);
  }

  private returnToken() {
    return localStorage.getItem('x-access-token') || '';
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- USER -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  register(username: string, password: string) {
    console.log('Register function');
    return this.httpclient.post(`${environment.apiUrl}/api/register`, {
        username: username,
        password: password
      },
      {headers: this.createHeader()}).pipe(
    );
  }

  login(username: string, password: string) {
    console.log('Login function');
    return this.httpclient.post(`${environment.apiUrl}/api/login`, {
      username: username,
      password: password
    },
      {headers: this.createHeader()}).pipe(
        tap(response => this.saveCredentials(response))
    );
  }

  updatePassword(username: string, oldPassword: string, newPassword: string) {
    console.log('Update password function');
    return this.httpclient.put(`${environment.apiUrl}/api/change-password`, {
      username: username,
      password: oldPassword,
      newPassword: newPassword
    },
      {headers: this.createHeader()}).pipe(
      );
  }

  public logout() {
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('expiresAt');
    localStorage.removeItem('username');
    localStorage.removeItem('userID');
    this.isLoggedIn$.next(false);
  }

  deleteAccount(){
    return this.httpclient.delete(`${environment.apiUrl}/api/delete-account?id=` + this.returnUserID(), {headers: this.createHeader()});
  }

  get isLoggedIn() {
    return this.isLoggedIn$.asObservable();
  }

  returnUsername() {
    return localStorage.getItem('username') || '';
  }

  returnUserID() {
    return localStorage.getItem('userID') || '';
  }
}




