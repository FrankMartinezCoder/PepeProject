import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelManagementComponent } from './hotel-management/hotel-management.component';
import { ProfileComponent } from './profile/profile.component';
import { ReserveDetailsComponent } from './reserve-details/reserve-details.component';
import { SearchReserveComponent } from './search-reserve/search-reserve.component';
import { UserManagementComponent } from './user-management/user-management.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {} },
            { path: 'dashboard', component: DashboardComponent, data: {} },
            { path: 'hotel-management', component: HotelManagementComponent, data: {} },
            { path: 'profile', component: ProfileComponent, data: {} },
            { path: 'reserve/details', component: ReserveDetailsComponent, data: {} },
            { path: 'reserves', component: SearchReserveComponent, data: {} },
            { path: 'user-management', component: UserManagementComponent, data: {} },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
