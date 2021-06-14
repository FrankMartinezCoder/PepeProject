import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
