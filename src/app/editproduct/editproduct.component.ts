import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import{ActivatedRoute}from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  public productId;
  public p;
  public d;
  public q;
  public n;
  prod

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  products=[];
  ngOnInit():void {
    var id=this.route.snapshot.paramMap.get('id');
    
    this.productId=id;
    console.log(this.productId)
    this.s.getProductById(id)
    .subscribe(res=>{
      console.log(res)
      this.prod=res
      
      this.d=this.prod.descreption
      this.n=this.prod.name
      this.p=this.prod.price
      this.q=this.prod.quantity
      
    })
  }
      
  

  OnSubmitSaveProduct(product:any){

   console.log(product)
    this.s.UpdateProduct(this.productId,product).subscribe(res=>{
      product=res;
      this.router.navigate(['/products']);
    })

  }

}
