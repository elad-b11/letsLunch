import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../events-api.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor(public eventsApi:EventsApiService) { }

  events:object[] = [];

  ngOnInit() {
    this.eventsApi.getAllEvents().then((events) => {
      this.events = events.map((event) => {
        event['eventDate'] = new Date(event['eventDate']);
        return event;
      });
    })
  }

}
