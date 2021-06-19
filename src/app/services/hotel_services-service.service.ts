import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { Room } from '../model/back-model/Room';
import { Service } from '../model/front-model/Service';
import { BackendService } from '../model/back-model/BackendService';

@Injectable({ providedIn: 'root' })
export class  ServicesService {

  constructor(private httpClient: HttpClient) { }

  public getServicesFromHotelId(parameters: any): Observable<BackendService[]> {
    return this.httpClient.get<Array<BackendService>>(Static.service.getServicesFromHotelId, { params: parameters });
  }

}