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
  
  public getBookingFromUser(parameters:any):Observable<number[]>  {
    return this.httpClient.get<Array<number>>(Static.booking.getBookingsByUser,{params:parameters});
  }

  public getListBookings():Observable<Booking[]>  {
    return this.httpClient.get<Array<Booking>>(Static.booking.list);
  }

  public addBookingRoom(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.booking.add,{'params':parameters});
  }

  public cancelBooking(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.booking.cancel,{'params':parameters});
  }
  
}