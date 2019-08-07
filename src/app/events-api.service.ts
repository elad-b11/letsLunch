import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) { 
  }

  getAllEvents():Promise<object[]> {
      return new Promise((resolve, reject) => {
        this.httpClient.get("http://129.213.110.238:3000/events",
                            {headers:
                              {
                                "Access-Control-Allow-Origin": "*"
                              }
                            }).subscribe((data) => {
          resolve(data['results']);
        });
      }); 
  }
}
