import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Service } from "../model/front-model/Service";
import { ServicesService } from "../services/hotel_services-service.service";

@Injectable({
    providedIn: 'root'
})
export class ServicesProvider {

    constructor(private servicesService:ServicesService) {}

    public getServicesFromHotelId(parameters: any): Observable<Service[]> {
        return this.servicesService.getServicesFromHotelId(parameters);
      }
}