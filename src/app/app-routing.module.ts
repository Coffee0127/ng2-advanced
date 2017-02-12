import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlotComponent } from './flot/flot.component';
import { RadialComponent } from './radial/radial.component';
import { RickshawComponent } from './rickshaw/rickshaw.component';

const routes: Routes = [
  // 設定預設路由，必須加 pathMatch
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards/:type', component: CardsComponent },
  { path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full' },
      { path: 'flot', component: FlotComponent },
      { path: 'radial', component: RadialComponent },
      { path: 'rickshaw', component: RickshawComponent }
    ]
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
