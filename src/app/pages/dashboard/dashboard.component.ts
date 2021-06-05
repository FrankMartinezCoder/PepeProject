import { Component, OnInit } from '@angular/core';
import { HeaderMenuObject } from 'src/app/models/header-menu-object';
import { HeaderProvider } from '../../providers/header.provider';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  headerMenu:HeaderMenuObject;

  constructor(private provider:HeaderProvider) {
    this.headerMenu = provider.getMenuNoLogging();
  }

  ngOnInit(): void {
  }

}
