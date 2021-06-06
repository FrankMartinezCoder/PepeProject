import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { MyBookingsComponent } from '../my-bookings/my-bookings.component';
import { TestingComponent } from './testing/testing.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { StaticPages } from '../config/pageUrls';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {} },
            { path: StaticPages.dashboard, component: DashboardComponent, data: {} },
            { path: StaticPages.profile, component: ProfileComponent, data: {} },
            { path: StaticPages.bookingDetails, component: BookingDetailsComponent, data: {} },
            { path: StaticPages.bookings, component: BookingSearchComponent, data: {} },
            { path: StaticPages.myBookings, component: MyBookingsComponent, data: {} },
            { path: StaticPages.hotelManagement, component: HotelManagementComponent, data: {} },
            { path: StaticPages.userManagement, component: UserManagementComponent, data: {} },
            { path: StaticPages.testing, component: TestingComponent, data: {} },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
