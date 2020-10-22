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
  users:Array<User>;
  constructor(private router:Router,  private l:UserService){}

  ngOnInit() {
    
    
    this.l.getUsers()
    .subscribe(resCours =>this.users=resCours);
  }

}
