import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelManagementComponent } from './management/hotel-management/hotel-management.component';
import { UserManagementComponent } from './management/user-management/user-management.component';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { BookingSearchComponent } from './booking/booking-search/booking-search.component';
import { StaticPages } from '../config/pageUrls';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { MyBookingsComponent } from './booking/my-bookings/my-bookings.component';
import { RoomManagementComponent } from './management/room-management/room-management.component';
import { ServicesManagementComponent } from './management/services-management/services-management.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {} },
            { path: StaticPages.dashboard, component: DashboardComponent, data: {} },
            { path: StaticPages.bookingDetails, component: BookingDetailsComponent, data: {} },
            { path: StaticPages.bookings, component: BookingSearchComponent, data: {} },
            { path: StaticPages.myBookings, component: MyBookingsComponent, data: {} },
            { path: StaticPages.hotelManagement, component: HotelManagementComponent, data: {} },
            { path: StaticPages.userManagement, component: UserManagementComponent, data: {} },
            { path: StaticPages.roomManagement, component: RoomManagementComponent, data: {} },
            { path: StaticPages.servicesManagement, component: ServicesManagementComponent, data: {} },
            { path: StaticPages.hotelList, component: HotelListComponent, data: {} },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
