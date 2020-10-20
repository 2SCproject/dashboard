import { Injectable } from '@angular/core';
import { Product} from '../product';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  addProduct(product:Product){
    console.log(JSON.stringify(product));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post<Product[]>("https://6138cfb37153.ngrok.io/ms-inventory/products",JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }


}
