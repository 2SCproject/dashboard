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
    return this.http.get<Order[]>("http://localhost:9000/userorders")
    .pipe(
          map(response=>response['_embedded'].userorders)
         );
}
/////orders by id
getOrderById(id:string){
  let headers= new HttpHeaders ({
   'Content-Type': 'application/json',
 });
 let options = {
   headers:headers
 }
  console.log("done");
  return this.http.get<Order[]>("http://localhost:9000/userorders/"+id,options)
   .pipe(
         map(response=>response)
        );
 }

 

}
interface userorders{
  _embedded:{
    userorders:Order[];
    _links:{self:{href:string}};
  }
}

