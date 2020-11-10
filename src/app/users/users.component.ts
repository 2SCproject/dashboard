import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  user;
  value:string;
  constructor(private router:Router,  private l:UserService){}

  ngOnInit() {
    
    
    this.l.getUsers()
    .subscribe(resCours =>this.users=resCours);
  }
  OnSubmitSearchProduct(value){
    console.log("zone");
   // this.l.getUserById(value)
    //.subscribe((resCours) =>this.users=resCours);
    
    //search email
   // this.l.getUserByEmail (value)
   // .subscribe((resCours) =>this.user=resCours);
    //search user
    console.log(value.value)
    if(!value.value) this.user=undefined;
    else{
    this.l.getUserByUsername(value.value)
    .subscribe(resCours =>
      {console.log(resCours)
      this.user=resCours
      console.log(this.user)
      
    });}
  }
  OnDeleteUser(id:string){
    console.log("deleteeuser")
    this.l.deleteUser(id)
    .subscribe(data=>this.users=data);          
  }
  
 

}
