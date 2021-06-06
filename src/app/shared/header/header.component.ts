import { Component } from '@angular/core';
import { HeaderMenuObject } from 'src/app/models/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';
import * as $ from 'jquery';
import { AppService } from 'src/app/services/app-service.service';

declare function isPhone():boolean;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public headerMenu:HeaderMenuObject;
  public dashboardUrl:string = "/";

  constructor(private provider:HeaderProvider, private appService:AppService) {
    this.headerMenu = this.provider.getMenu();
    this.appService.sub().subscribe(
      data=> {
        console.log("ha llegado hasta el headerComponent",data);
        this.headerMenu = null;
        this.headerMenu = this.provider.getMenu();
      }
    )
  }

  hideHeader() {
    if(!isPhone()) {
      $(".floating-button--header-checkbox").prop('checked', false); 
    }
  }
}
