import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { EventNotificationsApiService } from '../event-notifications-api.service';
import {AuthServiceService} from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit  {
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array(50).fill(0).map(() =>
      `Yarden the queen.`);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      share()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              public notificationApi: EventNotificationsApiService,
              public authApi:AuthServiceService,
              private router: Router) {}

  eventNotifications = [];

  ngOnInit() {
    this.notificationApi.getReleventNotifications().then((notifications)=> {
      this.eventNotifications = notifications;
    });
  }
  
  disconnectUser() {
    this.authApi.disconnectUser();
    this.router.navigate(['login']);
  }

}
