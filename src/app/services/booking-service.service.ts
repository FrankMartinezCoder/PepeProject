import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../model/back-model/Booking';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { Room } from '../model/back-model/Room';

@Injectable({providedIn: 'root'})
export class BookingService {

  constructor(private httpClient: HttpClient) {}
  
  public getFreeRoomList(parameters:any):Observable<Room[]> {
    return this.httpClient.get<Array<Room>>(Static.room.reservar,{params:parameters});
  }

  public addBookingRoom():Observable<Booking[]> {
    return null //this.httpClient.get<Booking[]>(Static.room.list);
  }
  
}