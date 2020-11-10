import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(formdata:any){
    console.log(formdata.file)
    return this.http.post("http://localhost:8081/productsinserver",formdata)
  }
}
