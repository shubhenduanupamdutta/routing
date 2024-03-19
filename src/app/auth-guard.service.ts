import { Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  return Inject(AuthService)
    .isAuthenticated()
    .pipe(
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          Inject(Router).navigate(['/login']);
          return false;
        }
        return true;
      })
    );
};
