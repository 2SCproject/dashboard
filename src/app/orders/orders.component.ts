
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
 
  orders:Array<User>;
  constructor(private router:Router,  private l:OrderService){}

  ngOnInit() {
    
    
    this.l.getOrders()
    .subscribe(resCours =>this.orders=resCours);
  }


}

