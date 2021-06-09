import { Component } from '@angular/core';
import * as $ from 'jquery';
import { InputObject } from 'src/app/model/front-model/Input';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public form:FormValidation = new FormValidation();
  public email:InputObject = new InputObject();
  public password:InputObject = new InputObject();

  constructor(private userService:UserService) { }

  private reset():void {
    $("#login-component,#login-background").fadeOut(500);
    $(".button--default").removeAttr('loading');
    $("body").removeClass("locked");
  }

  public loginCheck():void {
    this.emailValidator();
    this.passwordValidator();

    if(!this.password.isValid || !this.email.isValid)
      return

    $(".button--default").attr('loading','true');

    this.userService.login({
      'email':this.email.value,
      'password':this.password.value
    }).subscribe(
      data => {
        let timeOut = setTimeout(function() {
          clearTimeout(timeOut);
          this.reset();
        },700);
      },
      err => {
        $(".button--default").removeAttr('loading');
        this.form.errorMessage = "El login ha fallado, por favor vuelva a introducir los datos introducidos"
        this.email.reset();
        this.password.reset();
      }
    )
  }

  public cancel():void {
    this.reset();
  }

  public emailValidator():void {
    let temp = false;
    if(!this.email.value) {
      this.email.errorMessage = "El email es un campo obligatorio.";
    }
    else {
      try {
      if(!new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]{4,20}\.[a-z]{2,4}$`).test(this.email.value)) {
          throw new Error();
        }
        this.email.errorMessage = "";
        temp = true;
      }
      catch(err) {           
        this.email.errorMessage = "El campo email no es válido.";
        temp = false;
      }
    }
    this.email.isValid = temp;
  }
  
  public passwordValidator():void {
    let temp = true;
    if(!this.password.value) {
      this.password.errorMessage = "La contraseña es un campo obligatorio";
      temp = false;
    }
    else {
      this.password.errorMessage = "";
    }
    this.password.isValid = temp;
  }


}

class FormValidation {
  public errorMessage:string = "";
}