import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "../model/back-model/BackendService";
import { Service } from "../model/front-model/Service";
import { ServicesService } from "../services/hotel_services-service.service";

@Injectable({
    providedIn: 'root'
})
export class ServicesProvider {

    constructor(private servicesService:ServicesService) {}

    public getServicesFromHotelId(parameters: any): Observable<BackendService[]> {
        return this.servicesService.getServicesFromHotelId(parameters);
      }
}