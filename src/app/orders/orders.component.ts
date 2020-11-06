
import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {User} from '../user';
import {Router} from '@angular/router';
import {OrderService} from '../service/order.service';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 
  orders:Array<Order>;
  value:string;
  
  constructor(private router:Router,  private l:OrderService,){}

  ngOnInit() {
    
    
    this.l.getOrders()
    .subscribe(resCours =>this.orders=resCours);
    
  }
  OnSubmitSearchProduct(value){
    console.log("zone");
    this.l.getOrderById(value)
    .subscribe((resCours) =>this.orders=resCours);}
}

