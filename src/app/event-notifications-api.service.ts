import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventsApiService} from './events-api.service'

@Injectable({
  providedIn: 'root'
})
export class EventNotificationsApiService {

  constructor(private httpClient: HttpClient,
              private eventsApi: EventsApiService) { }

  baseUrl = "http://129.213.110.238:3000/eventNotifications";


  getAllEventNotifications():Promise<object[]> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl).subscribe((data) => {
        resolve(data['results']);
      });
    });
  }

  createEventNotification(type:number,contant:string, paymentKind:string, linkToEvent:string):Promise<string> {
    let eventNotification = {
      type,
      contant,
      paymentKind,
      linkToEvent,
      userName: "אלעד"
    };

    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl, eventNotification).subscribe((data) => {
        resolve(data['_id']);
      });
    });
  }

  deleteNotification(notificationId:string):Promise<string> {
    return new Promise((resolve, reject) => {
      this.httpClient.delete(`${this.baseUrl}/${notificationId}`).subscribe((data) => {
        resolve(data['_id']);
      });
    });
  }

  async getReleventNotifications() {
    let userName = "אלעד";
    let exsistingEvents = {};
    let notifications = await this.getAllEventNotifications();
    let releventNotifications = [];

    for(let notification of notifications) {
      let event;

      if(!exsistingEvents[notification['linkToEvent']]) {
        event = await this.eventsApi.getEventById(notification['linkToEvent']);
        exsistingEvents[notification['linkToEvent']] = event;
      } else {
        event = exsistingEvents[notification['linkToEvent']];
      }
      
      if(event.attendees.includes(userName)) {
        releventNotifications.push(notification);
      }
    }

    return releventNotifications;
  }
}
