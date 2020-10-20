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

  ngOnInit(): void {
  }

}
