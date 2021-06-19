import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { Room } from '../model/back-model/Room';
import { Service } from '../model/front-model/Service';

@Injectable({ providedIn: 'root' })
export class  ServicesService {

  constructor(private httpClient: HttpClient) { }

  public getServicesFromHotelId(parameters: any): Observable<Service[]> {
    return this.httpClient.get<Array<Service>>(Static.service.getServicesFromHotelId, { params: parameters });
  }

}