import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public email:string = '';
  public password:string = '';

  public emailError:string = '';
  public passwordError:string = ''; 

  public buttonValidator:boolean = true;
  constructor(private userService:UserService, private router:RouterModule) { }

  private reset():void {
    this.email = '';
    this.password = '';
    $("#login-component,#login-background").attr("hidden","true");
    $(".button-ok").removeAttr('loading');
    this.emailError = "";
    this.passwordError = "";
  }

  public loginCheck():void {
    const _ = this;
    $(".button-ok").attr('loading','true');

    this.userService.login({
      'email':this.email,
      'password':this.password
    }).subscribe(
      data => {
        _.reset();
      },
      err => {
        _.reset();
      }
    )
  }

  public cancel():void {
    this.reset();
  }

  public emailValidator():void {
    let temp = false;
    if(!this.email) {
      this.emailError = "El email es un campo obligatorio.";
    }
    else {
      try {
      if(!new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]{4,20}\.[a-z]{2,4}$`).test(this.email)) {
          throw new Error();
        }
        this.emailError = "";
        temp = true;
      }
      catch(err) {           
        this.emailError = "El campo email no es válido.";
        temp = false;
      }
    }
    this.buttonValidator = temp;
  }
  
  public passwordValidator():void {
    let temp = true;
    if(!this.password) {
      this.passwordError = "La contraseña es un campo obligatorio";
      temp = false;
    }
    else {
      this.passwordError = "";
    }
    this.buttonValidator = temp;
  }

  private validateButton(isValid:boolean):void {
    if(isValid) {
      this.passwordError = "";
      this.emailError = "";
    }
  }
}
