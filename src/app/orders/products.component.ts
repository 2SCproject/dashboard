import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../service/inventory.service';
import { Product} from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products
  constructor(private router:Router, private s:InventoryService) { }

  ngOnInit() {
    this.s.getProducts().subscribe(resProducts => 
      {
        
        this.products=resProducts}
        );
      
  }

  OnDeleteProduct(p){
    this.s.deleteProduct(p).subscribe()
    window.location.reload();
             
  }

  

}
