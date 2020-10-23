
import { Injectable } from '@angular/core';
import { Order} from '../order';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable,of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient ) {}

  getUsers(){
    console.log("yep")
    return this.http.get<Order[]>("http://localhost:3000/appUsers")
    .pipe(
          map(response=>response)
         );
}

}
