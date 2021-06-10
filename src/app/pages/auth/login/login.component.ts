import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { User } from 'src/app/model/back-model/User';
import { InputObject } from 'src/app/model/front-model/Input';
import { UserProvider } from 'src/app/providers/user.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormValidation = new FormValidation();
  public email: InputObject<string> = new InputObject();
  public password: InputObject<string> = new InputObject();

  constructor(private userProvider: UserProvider) { }

  ngOnInit() {
    this.userProvider.watcher.subscribe(
      _ => {
        let timeOut = setTimeout(function () {
          clearTimeout(timeOut);
          this.reset();
        }, 700);
      },
      err => {
        $(".button--default").removeAttr('loading');
        this.form.errorMessage = "El login ha fallado, por favor vuelva a introducir los datos introducidos"
        this.email.reset();
        this.password.reset();
      }
    )
  }

  private reset(): void {
    $("#login-component,#login-background").fadeOut(500);
    $(".button--default").removeAttr('loading');
    $("body").removeClass("locked");
    this.email.reset();
    this.password.reset();
    this.form.errorMessage = "";
  }

  public loginCheck(): void {
    this.emailValidator();
    this.passwordValidator();

    if (!this.password.isValid || !this.email.isValid)
      return

    $(".button--default").attr('loading', 'true');
    let user: User = new User();
    user.password = this.password.value;
    user.email = this.email.value;

    this.userProvider.login(user)
  }

  public cancel(): void {
    this.reset();
  }

  public emailValidator(): void {
    let temp = false;
    if (!this.email.value) {
      this.email.errorMessage = "El email es un campo obligatorio.";
    }
    else {
      try {
        if (!new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]{4,20}\.[a-z]{2,4}$`).test(this.email.value)) {
          throw new Error();
        }
        this.email.errorMessage = "";
        temp = true;
      }
      catch (err) {
        this.email.errorMessage = "El campo email no es válido.";
        temp = false;
      }
    }
    this.email.isValid = temp;
  }

  public passwordValidator(): void {
    let temp = true;
    if (!this.password.value) {
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
  public errorMessage: string = "";
}