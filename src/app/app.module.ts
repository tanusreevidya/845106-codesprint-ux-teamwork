import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { UpdateordersComponent } from './updateorders/updateorders.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { VieworderComponent } from './vieworder/vieworder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadMoreComponent,
    PlaceOrderComponent,
 
    ContactUsComponent,
    UpdateordersComponent,
    VieworderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
