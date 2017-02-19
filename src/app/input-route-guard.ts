import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate, Router } from '@angular/router';

import { LoginComponent } from './login/login.component';

@Injectable()
export class InputRouteGuard implements CanDeactivate<LoginComponent> {

  constructor(private router: Router) { }

  canDeactivate(component: LoginComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (component.form.dirty) {
      return confirm('Are you sure?');
    } else {
      return true;
    }
  }
}
