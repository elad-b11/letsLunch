import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(authService: AuthServiceService, router: Router) {
    if (!authService.isLoggedIn()) {
      router.navigate(['login']);
    } else {
      router.navigate(['']);
    }
  }
  title = 'letsLunch';
}
