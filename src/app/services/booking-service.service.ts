import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../models/Booking';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';

@Injectable({providedIn: 'root'})
export class BookingServiceService {
  constructor(private httpClient: HttpClient) { }
  
  public getRoomList():Observable<Booking[]> {
    return this.httpClient.get<Booking[]>(Static.room.list);
  }
}