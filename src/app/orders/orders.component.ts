
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
  userorders;
  value:string;
  
  constructor(private router:Router,  private l:OrderService,){}

  ngOnInit() {
    console.log("ff")
    this.l.getOrders()
    .subscribe(resCours =>this.orders=resCours);
    
  }
  
  OnSubmitSearchProduct(value){
    console.log(value.value);
    if(value.value!=undefined)
    this.orders=this.l.getOrderByUsername(this.orders,value.value)
    console.log(value.value)
    if(value.value==""){
    this.l.getOrders()
    .subscribe(resCours =>this.orders=resCours);
    }
  }
  //delete order
    OnDeleteOrder(o){ 
      this.l.deleteOrder(o)
      .subscribe();
      window.location.reload();        
    }

    onDelevred(o){
      this.l.updateOrder(o)
      .subscribe();
      window.location.reload(); 
    }
}


