import { Routes, RouterModule } from '@angular/router';
import { CarHomeComponent } from './car-home/car-home.component';
import { NgModule } from '@angular/core';

const carRoutes: Routes = [
  {path : '', component: CarHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(carRoutes)
],
  exports: [RouterModule],
  providers: [],
})

// tslint:disable-next-line:one-line
export class CarRoutingModule{}
