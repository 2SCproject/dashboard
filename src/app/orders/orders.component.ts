
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
      console.log("deleteeuser")
      //this.l.deleteUser(id)
      //.subscribe(data=>this.users=data); 
      this.l.deleteOrder(o)
      .subscribe(date=>this.orders.splice(o.id,1));
  
      this.router.navigate(['/orders']);         
    }
}


