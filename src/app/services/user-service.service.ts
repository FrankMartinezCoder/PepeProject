import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public login():Observable<User> {
    const _ = this;
    let observable:Observable<User>;
    observable = this.httpClient.get<User>(Static.user.login);
    
    observable.subscribe(
      data => {
        sessionStorage.setItem("currentLogin",JSON.stringify(data));
      },
      err => {
        _.logout();
      }
    )

    return observable;
  }

  public logout():void {
    sessionStorage.removeItem("currentLogin");
  }
}
