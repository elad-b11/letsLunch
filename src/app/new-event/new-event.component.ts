import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewEventDialogComponent } from './new-event-dialog/new-event-dialog.component';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  
  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(NewEventDialogComponent, {
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
   
  }

}


