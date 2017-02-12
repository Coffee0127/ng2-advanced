import { Route } from '@angular/router';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

export const fallbackRoute: Route = {
  path: '**',
  component: PageNotFoundComponent
};
