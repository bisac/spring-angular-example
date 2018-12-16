import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

const customerRoutes: Routes = [
  {path : '', component: CustomerHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(customerRoutes)
],
  exports: [RouterModule],
  providers: [],
})
export class CustomerRoutingModule {}
