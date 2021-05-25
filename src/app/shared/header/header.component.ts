import { Component } from '@angular/core';
import { HeaderMenuObject } from 'src/app/models/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerMenu:HeaderMenuObject;
  constructor(private provider:HeaderProvider) { 
    this.headerMenu = provider.getMenu();
  }
}
