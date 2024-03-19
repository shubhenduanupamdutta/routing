import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  loggedIn = false;

  is_authenticated(): Observable<boolean> {
    return of(this.loggedIn).pipe(delay(800));
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
