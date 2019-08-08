import { Component, OnInit } from '@angular/core';
import {HeverApiService} from '../hever-api.service';

@Component({
  selector: 'app-hever-notfication',
  templateUrl: './hever-notfication.component.html',
  styleUrls: ['./hever-notfication.component.scss']
})
export class HeverNotficationComponent implements OnInit {

  constructor(private heverApi:HeverApiService) { }

  ngOnInit() {
    this.heverApi.getAllHeverRequests().then((data:object[]) => {
      this.notifications = data;
    });
  }

  notifications :object[] = [];

  removeHever(id:string){
      this.heverApi.deleteHeverRequest(id).then((deletedId) => {
        this.notifications = this.notifications.filter((notification) => notification['id'] != deletedId);
      })
  }
}
