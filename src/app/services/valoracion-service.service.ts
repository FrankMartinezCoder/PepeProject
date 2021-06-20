import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { BackendService } from '../model/back-model/BackendService';

@Injectable({ providedIn: 'root' })
export class  ValoracionesService {

  constructor(private httpClient: HttpClient) { }

  public reservaServicios(parameters: any): Observable<void> {
    return this.httpClient.get<void>(Static.serviciosContratados.reservaServicios, { params: parameters });
  }

}