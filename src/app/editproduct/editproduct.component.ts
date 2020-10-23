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

  constructor(private route:ActivatedRoute,private router:Router, private s:InventoryService) { }
  products=[];
  ngOnInit():void {
    var id=this.route.snapshot.paramMap.get('id');
    this.productId=id;
    this.s.getProductById(id)
    .subscribe(res => {this.p=res.Price;this.d=res.Descreption;this.q=res.Quantity;this.n=res.Name  }
      );
  }

  OnSubmitSaveProduct(product:any){
    product._id=this.productId,
    this.s.UpdateProduct(product).subscribe(res=>{
      product=res;
      this.router.navigate(['/products']);
    })

  }

}
