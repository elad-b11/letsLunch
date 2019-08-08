import { Component, OnInit } from '@angular/core';
import { EventNotificationsApiService } from '../../app/event-notifications-api.service';

@Component({
  selector: 'app-personal-notification',
  templateUrl: './personal-notification.component.html',
  styleUrls: ['./personal-notification.component.scss']
})
export class PersonalNotificationComponent implements OnInit {
  constructor(private eventNotificationsApiService:EventNotificationsApiService) { }
  allNotification:any = [];
  async ngOnInit() {
    this.allNotification = await this.eventNotificationsApiService.getReleventNotifications();
    debugger;
  }

}
