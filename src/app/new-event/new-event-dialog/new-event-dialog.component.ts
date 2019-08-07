import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl } from '@angular/forms';

export interface Person {
  name: string;
}

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
  date = new FormControl(new Date());
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  persons: Person[] = [
  ];

  constructor() {
     
   }




  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.persons.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(person: Person): void {
    const index = this.persons.indexOf(person);

    if (index >= 0) {
      this.persons.splice(index, 1);
    }
  }

  ngOnInit() {
  }

}
