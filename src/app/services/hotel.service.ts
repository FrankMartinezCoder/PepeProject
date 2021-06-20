import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Static } from "../config/apiUrls";
import { Hotel } from "../model/back-model/Hotel";

@Injectable({providedIn: 'root'})
export class HotelService {

  constructor(private httpClient: HttpClient) {}

  public createHotel(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.hoteles.create,{params:parameters});
  }
  
  public listAllHotels(parameters:any):Observable<Array<Hotel>> {
    return this.httpClient.get<Array<Hotel>>(Static.hoteles.list,{params:parameters});
  }
  
  public deleteHotel(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.hoteles.delete,{params:parameters});
  }
  
  public modifyHotel(parameters:any):Observable<void> {
    return this.httpClient.get<void>(Static.hoteles.update,{params:parameters});
  }
}