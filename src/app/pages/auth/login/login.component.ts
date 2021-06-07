import { Component } from '@angular/core';
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
  
  constructor(private userService:UserService, private router:RouterModule) { }


  private reset():void {
    this.email = '';
    this.password = '';
    $("#login-component,#login-background").attr("hidden","true");
    $(".button-ok").removeAttr('loading');
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
}
