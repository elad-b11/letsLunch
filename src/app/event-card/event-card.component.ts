import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  openSnackBar() {
    this._snackBar.open("בקשה נשלחה", "OK", {
      duration: 2000,
    });
  }

  @Input() restaurantName: string
  @Input() eventDate:Date
  @Input() attendees:Array<string>
  @Input() isJoinable:Boolean
  @Input() canOrderFrom:Boolean
  @Input() description:string
}
