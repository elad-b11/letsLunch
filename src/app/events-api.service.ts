import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) { 
  
  }
  baseUrl = "http://129.213.110.238:3000/events";

  getAllEvents():Promise<object[]> {
      return new Promise((resolve, reject) => {
        this.httpClient.get(this.baseUrl).subscribe((data) => {
          resolve(data['results']);
        });
      }); 
  }

  createEvent(restaurantName, eventDate, attendees, isJoinable, canOrderFrom, description):Promise<string> {
    let eventObj = {
      restaurantName,
      eventDate: new Date(eventDate),
      attendees,
      isJoinable,
      canOrderFrom,
      description
    }
    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl, eventObj).subscribe((resultId) => {
            resolve(resultId.toString());
      });
    });
  }

  updateEvent(restaurantName, eventDate, attendees, isJoinable, canOrderFrom, description, id):Promise<string> {
    let eventObj = {
      restaurantName,
      eventDate: new Date(eventDate),
      attendees,
      isJoinable,
      canOrderFrom,
      description
    }
    return new Promise((resolve, reject) => {
      this.httpClient.put(`${this.baseUrl}/${id}`, eventObj).subscribe((resultId) => {
            resolve(resultId.toString());
      });
    });
  }

  deleteEvent(eventId):Promise<string> {
    return new Promise((resolve,reject) => {
      this.httpClient.delete(`${this.baseUrl}/${eventId}`).subscribe((deletedId) => {
        resolve(deletedId.toString());
      })
    });
  }

  getEventById(eventId):Promise<object> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(`${this.baseUrl}/${eventId}`).subscribe((event) => {
        resolve(event);
      })
    });
  } 
}
