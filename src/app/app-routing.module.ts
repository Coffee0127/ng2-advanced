import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // 設定預設路由，必須加 pathMatch
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
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
