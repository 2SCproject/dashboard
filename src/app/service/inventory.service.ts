import { Injectable } from '@angular/core';
import { Product} from '../product';
import { Category} from '../category';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getCategoryById(id:string){
    return this.http.get<Category>("http://localhost:8081/categories/"+id)
    .pipe(
          map(response=>response)
         );
} 


  getProductById(id:string){
    return this.http.get<Product>("http://localhost:8081/products/"+id)
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
    return this.http.put("http://localhost:8081/products"+product.idProduct,JSON.stringify(product),options)
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
    return this.http.post<Product[]>("http://localhost:8081/products",JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }



  addCategory(category:Category){
    console.log(JSON.stringify(category));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post<Category[]>("http://localhost:8081/categories",JSON.stringify(category),options)
    .pipe(
      map(response=>response)
    );
  }

  getCategories(){
    return this.http.get<Category[]>("http://localhost:8081/categories").pipe(
      map(response=>response['_embedded'].categories)
    );
  }

  getProducts(){
    return this.http.get<Product[]>("http://localhost:8081/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }

  
  deleteProduct(product:Product){
    console.log(JSON.stringify(product));
    let headers= new HttpHeaders ({
        'Content-Type': 'application/json',
    });
    let options = {
        headers:headers
    }
    return this.http.delete<Product[]>("http://localhost:8081/products/"+product.idProduct,options)
    .pipe(
        map(response=>response)
    ); 
}



}



interface categories{
  _embedded:{
    appUsers:Category[];
    _links:{self:{href:string}};
  }
}

interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
