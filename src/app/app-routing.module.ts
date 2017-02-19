import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { fallbackRoute } from './shared/fallback-route';

import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'form', component: FormComponent },
      { path: 'reactiveform', component: ReactiveFormComponent },
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
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
