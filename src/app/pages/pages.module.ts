import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


import { SearchReserveComponent } from './search-reserve/search-reserve.component';
import { ReserveDetailsComponent } from './reserve-details/reserve-details.component';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';



@NgModule({
  declarations: [
    SearchReserveComponent,
    ReserveDetailsComponent,
    ProfileComponent,
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent
    ],
    exports: [
      SearchReserveComponent,
      ReserveDetailsComponent,
      ProfileComponent,
      PagesComponent,
      DashboardComponent,
      UserManagementComponent,
      HotelManagementComponent
      ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }