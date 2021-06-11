import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Static } from '../config/apiUrls';
import { User } from '../model/back-model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  
  constructor(private httpClient: HttpClient) {}
  
  public login(parameters:any):Observable<User> {
    return this.httpClient.get<User>(Static.user.login,{params:parameters});
  }

  public register(parameters:any):Observable<User> {
    return this.httpClient.get<User>(Static.user.create,{params:parameters});
  }

  public logout():Observable<void> {
    return of(sessionStorage.removeItem("currentLogin"));
  }
}
