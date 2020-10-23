import { Injectable } from '@angular/core';
import { Product} from '../product';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }


  getProductById(id:string){
    return this.http.get<Product>("https://6138cfb37153.ngrok.io/ms-inventory/products/"+id)
    .pipe(
          map(response=>response)
         );
} 

  addProduct(product:Product){
    console.log(JSON.stringify(product));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post<Product[]>("https://90c7cc4286b7.ngrok.io/ms-inventory/products",JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }

  UpdateProduct(product:Product){
    console.log(JSON.stringify(product));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options={
      headers:headers
    }
    return this.http.put("https://90c7cc4286b7.ngrok.io/ms-inventory/products"+product._id,JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }


}
