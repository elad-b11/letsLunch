import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  events:[] = [
    {
      _id: new Date().getTime(),
      restaurantName:"דיקסי" ,
      eventDate: new Date(),
      attendees: ["דנה", "דני", "דין"],
      isJoinable: true,
      canOrderFrom: true,
      description: "הולכים היום לדיקסי ב13:00 לחגוג יום הולדת"
    },
    {
      _id: new Date().getTime(),
      restaurantName:"גירף" ,
      eventDate: new Date(),
      attendees: ["דנה", "דני", "דין"],
      isJoinable: true,
      canOrderFrom: true,
      description: "הולכים היום לדיקסי ב13:00 לחגוג יום הולדת"
    },
    {
      _id: new Date().getTime(),
      restaurantName:"קרדן" ,
      eventDate: new Date(),
      attendees: ["דנה", "דני", "דין"],
      isJoinable: true,
      canOrderFrom: true,
      description: "הולכים היום לדיקסי ב13:00 לחגוג יום הולדת"
    },
    {
      _id: new Date().getTime(),
      restaurantName:"חומוס אליהו" ,
      eventDate: new Date(),
      attendees: ["דני", "דין"],
      isJoinable: true,
      canOrderFrom: true,
      description: "הולכים היום לדיקסי ב13:00 לחגוג יום הולדת"
    }
  ];

  ngOnInit() {
  }

}
