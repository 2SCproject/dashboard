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

}
interface appUsers{
  _embedded:{
    appUsers:User[];
    _links:{self:{href:string}};
  }
}
