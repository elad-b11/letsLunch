import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  @Input() restaurantName: string
  @Input() eventDate:Date
  @Input() attendees:Array<string>
  @Input() isJoinable:Boolean
  @Input() canOrderFrom:Boolean
  @Input() description:string


}
