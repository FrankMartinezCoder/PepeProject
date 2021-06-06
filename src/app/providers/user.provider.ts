import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserProvider {

    isUserLogged():boolean {
        let response:boolean = true;
        try {
            let userLogged:User = JSON.parse(sessionStorage.getItem("currentLogin"));
            
            response = User.validate(userLogged);
        }
        catch(err) {
            response = false;
        }
        return response;
    }

    getUserLogged():User {
        let currentUser:User = null;
        try {
            currentUser = JSON.parse(sessionStorage.getItem("currentLogin"));
        }
        catch(err) {
            console.error(err);
        }
        return currentUser;
    }
}