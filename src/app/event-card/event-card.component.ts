import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, DialogPosition} from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';
import { EventsApiService } from '../events-api.service';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, 
              public dialog: MatDialog,
              public eventsApi:EventsApiService,
              private authApi:AuthServiceService) {}

  ngOnInit() {
  }

  openSnackBar():void {
    let userName = this.authApi.getUser();

    if(this.attendees.includes(userName)) {
      this._snackBar.open("יוזר כבר קיים באירוע", "OK", {
        duration: 2000,
      });  
    } else {
      this.eventsApi.updateEvent(this.restaurantName, 
                                 this.eventDate, 
                                 [...this.attendees, userName], 
                                 this.isJoinable, 
                                 this.canOrderFrom, 
                                 this.description, 
                                 this.id).then((data) => {
                                  this.attendees.push(userName);
                                 });

      this._snackBar.open("בקשה נשלחה", "OK", {
        duration: 2000,
      });  
    }
  }

  openOrderDialog():void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '25%',
      data: {
        restaurantName: this.restaurantName,
        id: this.id
      },
      height: '50vh',
      direction: 'rtl',
      minHeight: '50vh',
      maxHeight: '50vh'
    });
  }

  getDateString(date) {
    return new Date(date).toISOString();
  }

  @Input() restaurantName: string
  @Input() eventDate:Date
  @Input() attendees:Array<string>
  @Input() isJoinable:Boolean
  @Input() canOrderFrom:Boolean
  @Input() description:string
  @Input() id:string
}
