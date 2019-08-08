import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../auth-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private router: Router, public authService:AuthServiceService) { }

  username: string;

  ngOnInit() {
  }

  login() : void {
    if(this.username && this.username.length > 0){
      this.authService.setUser(this.username);
      this.router.navigate(['']);
    }else {
      alert("Invalid credentials");
    }
  }
  
}
