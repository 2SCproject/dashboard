import { Injectable } from '@angular/core';
import { Product} from '../product';
import { Category} from '../category';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 
  public dataForm:  FormGroup; 
  private baseUrl = ' http://localhost:8081/products/';

  constructor(private http: HttpClient) { }

  getCategoryById(id:string){
    return this.http.get<Category>("http://localhost:8081/categories/"+id)
    .pipe(
          map(response=>response)
         );
} 
createData(formData: FormData): Observable<any> {
  return this.http.post(`${this.baseUrl}`, formData);
}

  getProductById(id:string){
    return this.http.get(" http://localhost:8081/products/"+id)
    .pipe(
          map(response=>response)
         );
} 



  UpdateProduct(productId,product){
    console.log(JSON.stringify(product));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options={
      headers:headers
    }

    console.log(productId)
    return this.http.put("http://localhost:8081/products/"+productId,JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }

  addProduct(product,c){
    console.log(JSON.stringify(product));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post<Product[]>("http://localhost:8081/product/"+c,JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }



  addCategory(category){
    let cate={"name":category}
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }
    return this.http.post("http://localhost:8081/categories",cate,options)
  }

  getCategories(){
    return this.http.get<Category[]>(" http://localhost:8081/categories").pipe(
      map(response=>response['_embedded'].categories)
    );
  }

  getProducts(){
    return this.http.get<Product[]>(" http://localhost:8081/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }

  
  deleteProduct(product:Product){
    console.log(JSON.stringify(product));
    
    return this.http.delete("http://localhost:8081/products/"+product.idProduct)
    
}

deleteCategory(category){
  let url = "http://localhost:8081/categories/"+category;
  console.log(url)
  let headers= new HttpHeaders ({
      'Content-Type': 'application/json',
  });
  let options = {
      headers:headers
  }
  return this.http.delete(url,options)
 
}



}





interface products{
  _embedded:{
    appUsers:Product[];
    _links:{self:{href:string}};
  }
}
