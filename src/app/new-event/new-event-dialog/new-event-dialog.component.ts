import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { EventsApiService } from '../../events-api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-event-dialog',
  templateUrl: './new-event-dialog.component.html',
  styleUrls: ['./new-event-dialog.component.scss']
})
export class NewEventDialogComponent implements OnInit {
  checkedJoin = true;
  checkedTakeaway = true;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  eventDate = new FormControl(new Date());
  restaurantName="";
  description="";
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  persons: string[] = [
  ];

  constructor(public eventsApi:EventsApiService, private dialogRef:MatDialogRef<NewEventDialogComponent>) {
     
   }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) { //add a person
      this.persons.push( value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(person: string): void {
    const index = this.persons.indexOf(person);

    if (index >= 0) {
      this.persons.splice(index, 1);
    }
  }

  saveNewEvent(): void{
    this.eventsApi.createEvent(this.restaurantName, this.eventDate, this.persons, this.checkedJoin, this.checkedTakeaway, this.description).then((eventId) => {
      this.eventsApi.getEventById(eventId).then((event)=>{
       
        this.eventsApi.events.push(event);

      });
      this.dialogRef.close();
      
    })
    
  }

  ngOnInit() {



  }

}
