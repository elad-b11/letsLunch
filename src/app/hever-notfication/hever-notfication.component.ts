import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hever-notfication',
  templateUrl: './hever-notfication.component.html',
  styleUrls: ['./hever-notfication.component.scss']
})
export class HeverNotficationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notifications :object[] = [{Name:'ירדן',Date:new Date(),Tel:'0547894456'},
  {Name:'אנה',Date:new Date(),Tel:'0502165546'},
  {Name:'אוהד',Date:new Date(),Tel:'0524565521'},
  {Name:'שמעון',Date:new Date(),Tel:'0524כ65521'},
  {Name:'חנה',Date:new Date(),Tel:'052456ג521'}];

  removeHever(index:number){
      this.notifications.splice(index,1);
  }
}
