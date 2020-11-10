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
    //search email
   console.log(value.value)
    if(!value.value) this.user=undefined;
    else{
    this.l.getUserByEmail(value.value)
    .subscribe(resCours =>
      {this.user=resCours});}
    //search user
    console.log(value.value)
    if(!value.value) this.user=undefined;
    else{
    this.l.getUserByUsername(value.value)
    .subscribe(resCours =>
      {this.user=resCours});}
  }
  OnDeleteUser(u){
    console.log("deleteeuser")
    //this.l.deleteUser(id)
    //.subscribe(data=>this.users=data); 
    this.l.deleteUser(u)
    .subscribe(date=>this.users.splice(u.id,1));

    this.router.navigate(['/users']);         
  }
  
 

}
