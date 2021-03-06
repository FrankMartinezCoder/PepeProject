import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './management/user-management/user-management.component';
import { HotelManagementComponent } from './management/hotel-management/hotel-management.component';
import { BookingSearchComponent } from './booking/booking-search/booking-search.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookingFlowComponent } from './booking/booking-flow/booking-flow.component';
import { NumberInputComponent } from '../components/number-input/number-input.component';
import { ModalGestionComponent } from '../components/modal-gestion/modal-gestion.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MyBookingsComponent } from './booking/my-bookings/my-bookings.component';
import { RoomManagementComponent } from './management/room-management/room-management.component';
import { ServicesManagementComponent } from './management/services-management/services-management.component';
import { TablaGestionUserComponent } from '../components/tablas-gestion/tabla-gestion-user/tabla-gestion-user.component';
import { TablaGestionRoomComponent } from '../components/tablas-gestion/tabla-gestion-room/tabla-gestion-room.component';
import { TablaGestionHotelComponent } from '../components/tablas-gestion/tabla-gestion-hotel/tabla-gestion-hotel.component';
import { TablaGestionServiceComponent } from '../components/tablas-gestion/tabla-gestion-service/tabla-gestion-service.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent,
    RoomManagementComponent,
    ServicesManagementComponent,
    MyBookingsComponent,
    BookingSearchComponent,
    BookingDetailsComponent,
    LoginComponent,
    RegisterComponent,
    BookingFlowComponent,
    NumberInputComponent,
    ModalGestionComponent,
    HotelListComponent,
    TablaGestionUserComponent,
    TablaGestionRoomComponent,
    TablaGestionHotelComponent,
    TablaGestionServiceComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    UserManagementComponent,
    HotelManagementComponent,
    RoomManagementComponent,
    ServicesManagementComponent,
    MyBookingsComponent,
    BookingSearchComponent,
    BookingDetailsComponent,
    LoginComponent,
    RegisterComponent,
    BookingFlowComponent,
    NumberInputComponent,
    ModalGestionComponent,
    HotelListComponent,
    TablaGestionUserComponent,
    TablaGestionRoomComponent,
    TablaGestionHotelComponent,
    TablaGestionServiceComponent
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