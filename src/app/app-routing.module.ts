import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // 設定預設路由，必須加 pathMatch
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'cards',
    children: [
      // 需透過程式才能帶參數重導
      { path: '', component: CardsComponent, data: { type: '9527' } },
      { path: ':type', component: CardsComponent }
    ]
  },
  {
    path: 'charts/:username',
    loadChildren: './charts/charts.module#ChartsModule'
  },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
