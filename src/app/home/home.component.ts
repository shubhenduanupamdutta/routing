import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServers() {
    // Business logic
    this.router.navigate(['/servers']);
  }

  onLoadServer(id: number) {
    // Business logic
    this.router.navigate(['/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
    });
  }

  onLogin() {
    // Business logic
    this.authService.login();
  }

  onLogout() {
    // Business logic
    this.authService.logout();
  }
}
