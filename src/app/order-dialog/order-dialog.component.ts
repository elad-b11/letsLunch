import { Component, OnInit, Inject, NgZone, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventNotificationsApiService } from '../event-notifications-api.service';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data,
              public notificationsApi: EventNotificationsApiService) { }

  ngOnInit() {
  }

  onRequest(contant, paymentKind) {
    this.notificationsApi.createEventNotification(1, contant, paymentKind, this.data.id)
    
    this.dialogRef.close();
  }

  options:object[] = [
    {
      value:"cash", 
      displayName: "מזומן"
    },
    {
      value: "credit",
      displayName: "דרך אפליקציה"
    }
  ];
}
