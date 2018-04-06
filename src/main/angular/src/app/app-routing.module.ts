import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth-guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'customer', pathMatch: 'full'},
      { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
      { path: 'car', loadChildren: './car/car.module#CarModule' },
      { path: 'reparation', loadChildren: './reparation/reparation.module#ReparationModule' }
    ]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes , /*{preloadingStrategy : PreloadAllModules}*/ )  ],
  exports: [RouterModule],
})

// tslint:disable-next-line:one-line
export class AppRoutingModule{}
