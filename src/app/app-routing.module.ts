import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

import { LayoutComponent } from './layout/layout.component';
import { Page2Component } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // 設定預設路由，必須加 pathMatch
  { path: '', redirectTo: '/layout', pathMatch: 'full' },
  { path: 'layout', component: LayoutComponent },
  { path: 'page2', component: Page2Component },
  // 設定萬用路由，一定要放在最後一個路由定義
  // 通常上線前才加，避免增加 debug 難度
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
