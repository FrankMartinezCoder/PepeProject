import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public getAllUsers():Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(Static.user.list,{ params: {'esAdmin':'false'} });
  }

  public deleteUser(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.user.delete,{params:parameters});
  }
  
  public modifyUser(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.user.modify,{params:parameters});
  }

  public logout():Observable<void> {
    let temporalObserver: EventEmitter<void> = new EventEmitter();    
    sessionStorage.removeItem("currentUser")
    temporalObserver.emit();
    return temporalObserver;
  }
}
