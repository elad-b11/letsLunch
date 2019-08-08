import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthServiceService} from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class HeverApiService {
  baseUrl = "http://129.213.110.238:3000/heverRequests";

  constructor(private httpClient: HttpClient,
              private authApi: AuthServiceService) { }

  createHeverRequest(phoneNumber:string, amount:number, whenTo:Date) {
    let heverObj = {
      userName: this.authApi.getUser(),
      phoneNumber,
      amount,
      whenTo
    };

    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl, heverObj).subscribe((data) => {
        resolve(data['_id']);
      });
    });

  }

  getAllHeverRequests() {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl).subscribe((data) => {
        resolve(data['results']);
      });
    });
  }

  deleteHeverRequest(id:string) {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`${this.baseUrl}/${id}`).subscribe((data) => {
        resolve(data['_id']);
      });
    });
  }
}
