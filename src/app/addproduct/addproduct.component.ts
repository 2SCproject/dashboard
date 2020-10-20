import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import{ActivatedRoute}from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public productId;
  public p;
  public d;

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  products=[];

  ngOnInit() {
    var id=this.route.snapshot.paramMap.get('id');
    this.productId=id;
    this.s.getProductById(id)
    .subscribe(res => {this.p=res.Price;this.d=res.Descreption }
      );

  }

  OnSubmitAddProduct(product:Product){
    this.s.addProduct(product)
                 .subscribe(resnextCourse=>this.products.push(resnextCourse));
                 this.router.navigate(['/ms-inventory/products']);
                 console.log(product);
   }

}
