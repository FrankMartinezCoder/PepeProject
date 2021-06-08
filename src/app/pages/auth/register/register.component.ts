import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public name: string = '';
  public surname: string = '';
  public birthdate: Date = new Date();
  public email: string = '';
  public password: string = '';

  public nameError: string = '';
  public surnameError: string = '';
  public birthdateError: string = '';
  public emailError: string = '';
  public passwordError: string = '';

  public buttonValidator: boolean = true;

  constructor(private userService: UserService, private router: RouterModule) { }

  public nameValidator(): void{
    let temp = true;
    if (!this.name) {
      this.nameError = "El nombre es un campo obligatorio";
      temp = false;
    }
    else {
      this.nameError = "";
    }
    this.buttonValidator = temp;
  }
  public surnameValidator(): void{
    let temp = true;
    if (!this.surname) {
      this.surnameError = "El apellido es un campo obligatorio";
      temp = false;
    }
    else {
      this.surnameError = "";
    }
    this.buttonValidator = temp;
  }

  public emailValidator(): void {
    let temp = false;
    if (!this.email) {
      this.emailError = "El email es un campo obligatorio.";
    }
    else {
      try {
        if (!new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]{4,20}\.[a-z]{2,4}$`).test(this.email)) {
          throw new Error();
        }
        this.emailError = "";
        temp = true;
      }
      catch (err) {
        this.emailError = "El campo email no es válido.";
        temp = false;
      }
    }
    this.buttonValidator = temp;
  }

  public passwordValidator(): void {
    let temp = true;
    if (!this.password) {
      this.passwordError = "La contraseña es un campo obligatorio";
      temp = false;
    }
    else {
      this.passwordError = "";
    }
    this.buttonValidator = temp;
  }

  private validateButton(isValid: boolean): void {
    if (isValid) {
      this.nameError = "";
      this.surnameError="";
      this.birthdateError = "";
      this.passwordError = "";
      this.emailError = "";
    }
  }


  private reset(): void {
    this.name = '';
    this.surname = '';
    this.birthdate = new Date();
    this.email = '';
    this.password = '';
    this.nameError = "";
    this.surnameError = "";
    this.birthdateError = "";
    this.emailError = "";
    this.passwordError = "";
    $("#register-component,#register-background").attr("hidden", "true");
    $(".button-ok").removeAttr('loading');

  }

  public cancel(): void {
    this.reset();
  }
}
