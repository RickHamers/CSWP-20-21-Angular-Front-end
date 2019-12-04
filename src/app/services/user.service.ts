import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authservice: AuthenticationService,
    private httpClient: HttpClient
  ) { }

  getProfilePicture(){
    return this.httpClient.get(`${environment.apiUrl}/api/user/profile-picture?username=` + this.authservice.returnUsername(), {headers: this.authservice.createHeader()});
  }

  getUserProfilePicture(username: string){
    return this.httpClient.get(`${environment.apiUrl}/api/user/profile-picture?username=` + username, {headers: this.authservice.createHeader()});
  }

  uploadProfilePicture(imageData: string){
    return this.httpClient.post(`${environment.apiUrl}/api/user/profile-picture`, {imageData: imageData, username: this.authservice.returnUsername()},{headers: this.authservice.createHeader()});
  }
}
