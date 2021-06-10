import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../model/back-model/User';
import { UserService } from '../services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {
    public watcher = new EventEmitter<User>();

    constructor(private userService:UserService) {}

    public login(user:User):void {
        let parameters:object = {
            'email':user.email,
            'password':user.password
        }
        this.userService.login(parameters).subscribe(
            data => {
              sessionStorage.setItem("currentUser",JSON.stringify(data));
              this.watcher.emit(data);
            },
            err => {
              this.watcher.emit(null);
            }
          )
    }

    public register(user:User):void {
        let parameters:object = {
            'email':user.email,
            'password':user.password,
            'nombre':user.name,
            'apellidos':user.surname
        }
        this.userService.login(parameters).subscribe(
            data => {
              this.watcher.emit(data);
            },
            err => {
              this.watcher.emit(null);
            }
          )
    }

    public logout():void {
        this.userService.logout().subscribe(
            _=> {
                this.watcher.emit(null);
            }
        )
    }

    public isUserLogged():boolean {
      let user:User = User.parse(JSON.parse(sessionStorage.getItem('currentUser')));


        return user?true:false;
    }

    public getUserLogged():User {
      let user:User = User.parse(JSON.parse(sessionStorage.getItem('currentUser')));
      return user;
    }
}