import { Component } from '@angular/core';
import * as $ from 'jquery';
import { InputObject } from 'src/app/model/front-model/Input';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public name: InputObject<string> = new InputObject('name');
  public surname: InputObject<string> = new InputObject('surname');
  public birthdate: InputObject<Date> = new InputObject();
  public email: InputObject<string> = new InputObject('email');
  public password: InputObject<string> = new InputObject('password');

  constructor(private userService: UserService) { }

  public validator(elem: InputObject<any>): void {

    let errorMessage: string = "";
    switch (elem.fieldName) {
      case 'name':
        errorMessage = "El nombre es un campo obligatorio";
        break;
      case 'surname':
        errorMessage = "El apellido es un campo obligatorio";
        break;
      case 'password':
        errorMessage = "La contraseña es un campo obligatorio";
        break;
      case 'email':
        errorMessage = "El email es un campo obligatorio";
        break;
    }
    switch (elem.fieldName) {
      case 'name':
      case 'surname':
      case 'password':
        if (elem.value) {
          elem.errorMessage = "";
          elem.isValid = true;
        }
        else {
          elem.errorMessage = errorMessage;
          elem.isValid = false;
        }
        break;
      case 'email':
        try {
          if (!elem.value) {
            elem.isValid = false
            elem.errorMessage = errorMessage;
          }
          else {
            if (new RegExp(`^[a-z0-9._%+-]+@[a-z0-9.-]{4,20}\.[a-z]{2,4}$`).test(elem.value)) {
              elem.isValid = true;
              elem.errorMessage = "";
            }
            else {
              elem.isValid = false;
              elem.errorMessage = "El formato de email que ha introducido no es correcto";
            }
          }

        }
        catch (err) {
          elem.isValid = false;
          elem.errorMessage = "El formato de email que ha introducido no es correcto";
        }
        break;
    }

  }

  public reset(): void {
    this.name.reset();
    this.surname.reset();
    this.birthdate.reset();
    this.email.reset();
    this.password.reset();

    $("#register-component,#register-background").attr("hidden", "true");
    $(".button-ok").removeAttr('loading');
  }

  public registerCheck() {
    const _ = this;
    let params: object = {
      email: this.email,
      password: this.password,
      nombre: this.name,
      apellidos: this.surname
    }
    this.userService.register(params).subscribe(
      user => {
        _.reset();
      },
      err => {
        _.reset();
      }
    )
  }
}