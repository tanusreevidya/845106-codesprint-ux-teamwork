import { Injectable } from '@angular/core';
import { ViewOrder } from './model/vieworder';
import { Observable } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  httpUrl = 'http://localhost:4444/vieworders/';
 orders = ViewOrder;
  constructor(private httpClient : HttpClient) { }
 getAllOrders() : Observable<ViewOrder[]>{
   return this.httpClient.get<ViewOrder[]>(this.httpUrl);
 }
  saveOrder(order : ViewOrder): Observable<ViewOrder>{
    return this.httpClient.post<ViewOrder>(this.httpUrl,order);
  }
   deleteOrder(amount : number):Observable<ViewOrder> {
    return this.httpClient.delete<ViewOrder>(this.httpUrl + amount)
      }
      update(order : ViewOrder) :Observable<ViewOrder>{
        return this.httpClient.put<ViewOrder>(this.httpUrl + order.amount,order);
      }
      getOrderById(amount:number) : Observable<ViewOrder>{
        return this.httpClient.get<ViewOrder>(this.httpUrl+amount);
      }
}