import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Static } from '../config/apiUrls';
import { BackendService } from '../model/back-model/BackendService';

@Injectable({ providedIn: 'root' })
export class  ValoracionesService {

  constructor(private httpClient: HttpClient) { }

  public reservaServicios(parameters: any): Observable<string> {
    return this.httpClient.post<string>(Static.serviciosContratados.reservaServicios, parameters,{'headers':{ 'content-type': 'application/json'}});
  }

}