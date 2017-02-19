import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.queryParams['key'] === '123') {
      return Observable.of(true);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
