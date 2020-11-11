import { Injectable } from '@angular/core';
import { Order} from '../order';
import {User} from '../user'
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable,of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient ) {}

  getOrders(){
    console.log("yORDER")
    return this.http.get<Order[]>("http://localhost:9000/allorders")
   
}
/////orders by id
getOrderById(id:string){

  console.log("done");
  return this.http.get<Order[]>("http://localhost:9000/order/"+id)
   
 }
 getOrderByUsername(orders,username){
  console.log(orders)
  let ordus = orders.filter(ord => ord.appuser.username == username)
  return ordus

 }
 deleteOrder(order:Order){
  let headers= new HttpHeaders ({
      'Content-Type': 'application/json',
  });
  let options = {
      headers:headers
  }
  return this.http.delete("http://localhost:9000/userorders/"+order.id,options)
  
}

updateOrder(order){
  let headers= new HttpHeaders ({
    'Content-Type': 'application/json',
});
let options = {
    headers:headers
}
return this.http.put("http://localhost:9000/order/"+order.id,options)
}

}
interface userorders{
  _embedded:{
    userorders:Order[];
    _links:{self:{href:string}};
  }
}

