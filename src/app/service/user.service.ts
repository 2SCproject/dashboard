import { Injectable } from '@angular/core';
import { User} from '../user';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Observable,of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) {}

  getUsers(){
    console.log("yep")
    return this.http.get<User[]>("http://localhost:3000/appUsers")
    .pipe(
          map(response=>response['_embedded'].appUsers)
         );
}
getUserById(id:string){
 let headers= new HttpHeaders ({
  'Content-Type': 'application/json',
});
let options = {
  headers:headers
}
 console.log("done");
 return this.http.get<User[]>("http://localhost:3000/appUsers"+id,options)
  .pipe(
        map(response=>response)
       );
}
getUserByUsername(username:string){
  // return this.http.get<User>("http://localhost:3000/appUsers/"+id)
 
  return this.http.get("http://localhost:3000/user/"+username)
   
 }



 getUserByEmail(email:string){
  // return this.http.get<User>("http://localhost:3000/appUsers/"+id)
 
  return this.http.get("http://localhost:3000/user/email/"+email)
  
 }
   //delete enseignat cour
   deleteUser(user:User){
    console.log("delete");
    let headers= new HttpHeaders ({
        'Content-Type': 'application/json',
    });
    let options = {
        headers:headers
    }
    return this.http.delete("http://localhost:3000/appUsers/"+user.id,options)
    .pipe(
        map(response=>response['_embedded'].appUsers)
    ); 
}
}
interface appUsers{
  _embedded:{
    appUsers:User[];
    _links:{self:{href:string}};
  }
}
/**let headers= new HttpHeaders ({
                'Content-Type': 'application/json',
            });
            let options = {
                headers:headers
            } */