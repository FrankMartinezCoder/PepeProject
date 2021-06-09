import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { User } from '../model/back-model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService { 
  
  public watcher = new EventEmitter<User>();

  constructor(private httpClient: HttpClient) {}
  
  public login(parameters:any):Observable<User> {
    const _ = this;
    let observable:Observable<User>;
    observable = this.httpClient.get<User>(Static.user.login,{params:parameters});
    
    observable.subscribe(
      data => {
        sessionStorage.setItem("currentLogin",JSON.stringify(data));
        _.watcher.emit(data);
      },
      err => {
        console.error("[UserService]\n",err);
        _.logout();
      }
    )
    return observable;
  }

  public register(parameters:any):Observable<User> {
    const _ = this;
    let observable:Observable<User>;
    observable = this.httpClient.get<User>(Static.user.create,{params:parameters});
    
    observable.subscribe(
      data => {
        
      },
      err => {
        console.error("[UserService]\n",err);
        _.logout();
      }
    )
    return observable;
  }

  public logout():void {
    sessionStorage.removeItem("currentLogin");
    this.watcher.emit();
  }
}
