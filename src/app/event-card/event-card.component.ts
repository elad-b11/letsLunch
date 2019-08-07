import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  ngOnInit() {
  }

  openSnackBar():void {
    this._snackBar.open("בקשה נשלחה", "OK", {
      duration: 2000,
    });
  }

  openOrderDialog():void {
    const dialogRef = this.dialog.open(OrderDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
  }

  @Input() restaurantName: string
  @Input() eventDate:Date
  @Input() attendees:Array<string>
  @Input() isJoinable:Boolean
  @Input() canOrderFrom:Boolean
  @Input() description:string
}
