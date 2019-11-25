// Rick Hamers - 2019-11-14 16:00
// advertisement.service.ts - provide advertisement functionality & utility

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService
  ) { }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ADVERTISEMENT -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  getAllAdvertisements() {
    return this.httpClient.get(`${environment.apiUrl}/api/advertisements`, {headers: this.authService.createHeader()});
  }

  getAdvertisement(id: string) {
    return this.httpClient.get(`${environment.apiUrl}/api/advertisement?id=` + id, {headers: this.authService.createHeader()});
  }

  postAdvertisement(title: string, content: string) {
    return this.httpClient.post(`${environment.apiUrl}/api/advertisement`, {username: this.authService.returnUsername(), title: title, content: content}, {headers: this.authService.createHeader()});
  }

  updateAdvertisement(title: string, content: string, advertisementId: string) {
    return this.httpClient.put(`${environment.apiUrl}/api/advertisement?id=` + advertisementId, {title: title, content: content}, {headers: this.authService.createHeader()});
  }

  deletAdvertisement(advertisementId: string) {
    return this.httpClient.delete(`${environment.apiUrl}/api/advertisement?id=` + advertisementId, {headers: this.authService.createHeader()});
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- COMMENT -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  getComment(id: string) {
    return this.httpClient.get(`${environment.apiUrl}/api/comment?id=` + id, {headers: this.authService.createHeader()});
  }

  postCommentOnAdvertisement(content: string, advertisementId: string) {
    return this.httpClient.post(`${environment.apiUrl}/api/advertisement/comment`, {content: content, username: this.authService.returnUsername(), advertisementId: advertisementId}, {headers: this.authService.createHeader()});
  }

  postCommentOnComment(content: string, advertisementId: string, commentId: string) {
    return this.httpClient.post(`${environment.apiUrl}/api/advertisement/comments?id=` + commentId, {content: content, username: this.authService.returnUsername(), advertisementId: advertisementId}, {headers: this.authService.createHeader()});
  }

  updateComment(commentId: string, content: string) {
    return this.httpClient.put(`${environment.apiUrl}/api/comment?id=` + commentId, {content: content}, {headers: this.authService.createHeader()});
  }

  deleteComment(commentId: string) {
    return this.httpClient.delete(`${environment.apiUrl}/api/comment?id=` + commentId, {headers: this.authService.createHeader()});
  }

  /* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- BID -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
  postBid(advertisementId: string, amount: Number){
    return this.httpClient.post(`${environment.apiUrl}/api/advertisement/bids`, {amount: amount, username: this.authService.returnUsername(), advertisementId: advertisementId}, {headers: this.authService.createHeader()});
  }

  deleteBid(bidId: string){
    return this.httpClient.delete(`${environment.apiUrl}/api/bid` + bidId, {headers: this.authService.createHeader()});
  }
}
