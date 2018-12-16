import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReparationHomeComponent } from './reparation-home/reparation-home.component';
import { ReparationRoutingModule } from './reparation-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReparationRoutingModule
  ],
  declarations: [ReparationHomeComponent]
})
export class ReparationModule { }
