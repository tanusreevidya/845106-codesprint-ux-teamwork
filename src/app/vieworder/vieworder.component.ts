import { Component, OnInit } from '@angular/core';
import { ViewOrder } from '../model/vieworder';
import { OrderserviceService } from '../orderservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  orders : ViewOrder[];
  constructor(private orderService : OrderserviceService,private router : Router) { }
  ngOnInit() {
   this.orderService.getAllOrders().subscribe(data =>
     {
       this.orders=data;
     });
  }
  delete(order:ViewOrder){
    this.orderService.deleteOrder(order.id).subscribe();
    this.orders=this.orders.filter(u=>u!==order);
  }
  update(order:ViewOrder){
    localStorage.removeItem('orderAmount');
    localStorage.setItem('orderAmount', order.amount.toString());
     this.router.navigate(['/updateorder']);
  }
}