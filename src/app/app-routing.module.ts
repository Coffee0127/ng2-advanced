import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

const routes: Routes = [
  // 設定預設路由，必須加 pathMatch
  { path: 'dashboard', component: DashboardComponent },
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
