import { Component, OnInit } from '@angular/core';
import { HeaderMenuObject } from '../../model/front-model/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import { UserProvider } from 'src/app/providers/user.provider';
import { User } from 'src/app/model/back-model/User';

declare function isPhone(): boolean;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerMenu: HeaderMenuObject;
  public user:User;
  constructor(private provider: HeaderProvider, private userProvider:UserProvider, private router:Router) {

    this.userProvider.watcher.subscribe(
      _ => {
        this.ngOnInit();
      },
      err => {
        console.error("[HeaderComponent]", err);
      }
    )
  }
  ngOnInit(): void {
    this.headerMenu = this.provider.getMenu();
    this.user = this.userProvider.getUserLogged();
  }
  eventTrigger(id: number) {
    switch (id) {
      case 0:
        $("#login-component,#login-background").fadeIn(500);
        $("body").addClass("locked");
        break;
      case 1:        
        this.userProvider.logout();
        this.router.navigate(['/']);
        this.ngOnInit();
        break;
      case 2:
        $("#register-component,#register-background").fadeIn(500);
        $("body").addClass("locked");
        break;
    }

    if (!isPhone()) {
      $(".floating-button--header-checkbox").prop('checked', false);
    }
  }
}
