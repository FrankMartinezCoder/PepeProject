import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/Booking';

@Injectable({providedIn: 'root'})
export class BookingServiceService {
  constructor(private httpClient: HttpClient) { }
  
  public getRoomList():Booking[] {
    // this.httpClient.get()
    return null;
  }
}