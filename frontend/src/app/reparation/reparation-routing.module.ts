import { Routes, RouterModule } from '@angular/router';
import { ReparationHomeComponent } from './reparation-home/reparation-home.component';
import { NgModule } from '@angular/core';

const reparationRoutes: Routes = [
  {path : '', component: ReparationHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(reparationRoutes)
],
  exports: [RouterModule],
  providers: [],
})

// tslint:disable-next-line:one-line
export class ReparationRoutingModule{}
