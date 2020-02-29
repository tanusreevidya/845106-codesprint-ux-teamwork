import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderserviceService } from '../orderservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  placeOrderForm: FormGroup
  constructor(private formBuilder:FormBuilder,private service : OrderserviceService,private router:Router) { }
  ngOnInit() {
    this.placeOrderForm=this.formBuilder.group({
      amount:['',Validators.required],
      pais: ['',[Validators.required,Validators.min(0),Validators.max(99)]],
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      shippingadd: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      pincode: ['',Validators.required],
      bfirstname: ['',Validators.required],
      blastname: ['',Validators.required],
      ph1: ['',Validators.required],
      ph2: ['',Validators.required],
      ph3: ['',Validators.required],
      ph4: ['',Validators.required],
      ph5: ['',Validators.required],
      ph6: ['',Validators.required],
      ph7: ['',Validators.required],
      ph8: ['',Validators.required],
      ph9: ['',Validators.required],
      ph10: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
    });
  }
  saveOrder(){
    this.service.saveOrder(this.placeOrderForm.value).subscribe(data =>{
     alert('Placed Order Successfully');
      console.log('Ordered Successfully');
      this.router.navigate(['/vieworders'])
    });
  }
  // onSubmit(){
  //   console.log(this.placeOrderForm.value);
  // }
}
  
