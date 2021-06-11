import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../model/back-model/Booking';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';

@Injectable({providedIn: 'root'})
export class BookingService {

  constructor(private httpClient: HttpClient) {}
  
  public getRoomList():Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(Static.room.list);
  }

  public addBookingRoom():Observable<Booking[]> {
    return null //this.httpClient.get<Booking[]>(Static.room.list);
  }

  
}