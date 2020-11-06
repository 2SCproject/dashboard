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
  public q;
  public n;

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  products=[];

  ngOnInit() {
    var id=this.route.snapshot.paramMap.get('id');
    this.productId=id;
    this.s.getProductById(id)
    .subscribe(res => {this.p=res.price;this.d=res.descreption;this.n=res.name ;this.q=res.quantity}
      );

  }

  OnSubmitAddProduct(product:Product){
    this.s.addProduct(product)
                 .subscribe(resnextProduct=>this.products.push(resnextProduct));
                 this.router.navigate(['/products']);
                 
                
   }

}
