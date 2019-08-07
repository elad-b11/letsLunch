import { Component, OnInit, Inject, NgZone, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrderDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onCloseCancel() {

  }

  onCloseConfirm() {

  }

  onRequest() {
    this.dialogRef.close();
  }

  options:object[] = [
    {
      value:"0", 
      displayName: "מזומן"
    },
    {
      value: "1",
      displayName: "דרך אפליקציה"
    }
  ];
}
