import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

import { UpdateordersComponent } from './updateorders/updateorders.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [


  { path: '', component: HomeComponent },
  {path:'read-more',component:ReadMoreComponent},
  {path:'place-order',component:PlaceOrderComponent},
  {path:'view-orders',component:VieworderComponent},
  {path:'update-orders',component:UpdateordersComponent},
  {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
