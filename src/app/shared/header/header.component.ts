import { Component, OnInit } from '@angular/core';
import { HeaderMenuObject } from '../../model/front-model/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

declare function isPhone(): boolean;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerMenu: HeaderMenuObject;

  constructor(private provider: HeaderProvider, private userService: UserService, private router:Router) {
    const _ = this;
    this.userService.watcher.subscribe(
      user => {
        _.ngOnInit();
      },
      err => {
        console.error("[HeaderComponent]", err);
      }
    )
  }
  ngOnInit(): void {
    this.headerMenu = this.provider.getMenu();
  }
  eventTrigger(id: number) {

    switch (id) {
      case 0:
        $("#login-component,#login-background").fadeIn(500);
        $("body").addClass("locked");
        break;
      case 1:
        this.userService.logout();
        this.router.navigate(['/']);
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
