import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent,
    BookingSearchComponent,
    BookingDetailsComponent
    ],
    exports: [
      ProfileComponent,
      PagesComponent,
      DashboardComponent,
      UserManagementComponent,
      HotelManagementComponent,
      BookingSearchComponent,
      BookingDetailsComponent
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