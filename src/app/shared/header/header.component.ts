import { Component, OnInit } from '@angular/core';
import { HeaderMenuObject } from 'src/app/models/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user-service.service';

declare function isPhone(): boolean;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerMenu: HeaderMenuObject;
  public dashboardUrl: string = "/";

  constructor(private provider: HeaderProvider, private userService: UserService) {
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
    console.log("HEADER", this.headerMenu);
  }
  hideHeader() {
    if (!isPhone()) {
      $(".floating-button--header-checkbox").prop('checked', false);
    }
  }
}
