
import { Component, OnInit } from '@angular/core';
import {Order} from '../order';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders:Array<Order>;
  constructor(private router:Router,  private l:UserService){}

  ngOnInit() {
    
    
    this.l.getUsers()
    .subscribe(resCours =>this.orders=resCours);
  }

}

