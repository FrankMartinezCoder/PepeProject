import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { User } from '../models/User';
import { AppService } from './app-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  constructor(private httpClient: HttpClient, private appService:AppService) { }
  public login(parameters:any):Observable<User> {
    const _ = this;
    let observable:Observable<User>;
    observable = this.httpClient.get<User>(Static.user.login,{params:parameters});
    
    observable.subscribe(
      data => {
        sessionStorage.setItem("currentLogin",JSON.stringify(data));
        this.appService.throwTrigger();
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
  }
}
