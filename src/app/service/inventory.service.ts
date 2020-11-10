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
  private baseUrl = ' https://81b9b6d81d55.ngrok.io/products/';

  constructor(private http: HttpClient) { }

  getCategoryById(id:string){
    return this.http.get<Category>(" https://81b9b6d81d55.ngrok.io/categories/"+id)
    .pipe(
          map(response=>response)
         );
} 
createData(formData: FormData): Observable<any> {
  return this.http.post(`${this.baseUrl}`, formData);
}

  getProductById(id:string){
    return this.http.get(" https://81b9b6d81d55.ngrok.io/products/"+id)
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
    return this.http.put("https://81b9b6d81d55.ngrok.io/products/"+productId,JSON.stringify(product),options)
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
    return this.http.post<Product[]>(" https://81b9b6d81d55.ngrok.io/products",JSON.stringify(product),options)
    .pipe(
      map(response=>response)
    );
  }



  addCategory(category){
    console.log(JSON.stringify(category));
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    });
    let options = {
      headers: headers
    }

    let categ={"name":category}
    return this.http.post(" https://81b9b6d81d55.ngrok.io/category",JSON.stringify(categ),options)
    
  }

  getCategories(){
    return this.http.get<Category[]>(" https://81b9b6d81d55.ngrok.io/categories")
  }

  getProducts(){
    return this.http.get<Product[]>(" https://81b9b6d81d55.ngrok.io/products").pipe(
      map(response=>response['_embedded'].products)
    );
  }

  
  deleteProduct(product:Product){
    console.log(JSON.stringify(product));
    
    return this.http.delete(" https://81b9b6d81d55.ngrok.io/products/"+product.idProduct)
    
}

deleteCategory(category){
  let url = "https://81b9b6d81d55.ngrok.io/category/"+category;
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
