import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './car-home/car-home.component';
import { CarRoutingModule } from './car-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  declarations: [CarHomeComponent]
})
export class CarModule { }
