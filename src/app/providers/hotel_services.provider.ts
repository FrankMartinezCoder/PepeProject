import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Service } from "../model/front-model/Service";
import { HotelServicesService } from "../services/hotel_services-service.service";

@Injectable({
    providedIn: 'root'
})
export class HotelServicesProvider {

    constructor(private hotelServicesService:HotelServicesService) {}

    public getServicesFromHotelId(parameters: any): Observable<Service[]> {
        


        return null;
      }
}