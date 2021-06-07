import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
