import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {
  checkedJoin = true;
  checkedTakeaway = true;
  
  constructor() {}
  
  ngOnInit() {
   
  }

}


