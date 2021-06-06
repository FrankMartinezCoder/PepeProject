import { Component } from '@angular/core';
import { HeaderMenuObject } from 'src/app/models/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';
import * as $ from 'jquery';

declare function isPhone():boolean;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public headerMenu:HeaderMenuObject;
  public dashboardUrl:string = '/dashboard';
  constructor(private provider:HeaderProvider) {
    this.headerMenu = this.provider.getMenu();
  }

  hideHeader() {
    if(!isPhone()) {
      $(".floating-button--header-checkbox").prop('checked', false); 
    }
  }
}
