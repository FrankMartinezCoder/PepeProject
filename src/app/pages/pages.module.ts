import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { BookingSearchComponent } from './booking/booking-search/booking-search.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookingFlowComponent } from './booking/booking-flow/booking-flow.component';
import { NumberInputComponent } from '../components/number-input/number-input.component';
import { TablaGestionComponent } from '../components/tabla-gestion/tabla-gestion.component';
import { ModalGestionComponent } from '../components/modal-gestion/modal-gestion.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent,
    BookingSearchComponent,
    BookingDetailsComponent,
    LoginComponent,
    RegisterComponent,
    BookingFlowComponent,
    NumberInputComponent,
    TablaGestionComponent,
    ModalGestionComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent,
    BookingSearchComponent,
    BookingDetailsComponent,
    LoginComponent,
    RegisterComponent,
    BookingFlowComponent,
    NumberInputComponent,
    TablaGestionComponent,
    ModalGestionComponent
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