import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../model/back-model/Booking';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { Room } from '../model/back-model/Room';

@Injectable({ providedIn: 'root' })
export class HotelServicesService {

  constructor(private httpClient: HttpClient) { }

  public getServicesFromHotelId(parameters: any): Observable<Room[]> {
    return this.httpClient.get<Array<Room>>(Static.service.getServicesFromHotelId, { params: parameters });
  }

}