import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hotel } from "../model/back-model/Hotel";
import { HotelService } from "../services/hotel.service";
@Injectable({
    providedIn: 'root'
})
export class HotelProvider {

    constructor(private hotelService:HotelService){}

    public create(hotel:Hotel) {
        return this.hotelService.createHotel(null);
    }

    public modify(hotel:Hotel) {
        return this.hotelService.modifyHotel(JSON.stringify(hotel));
    }

    public listAll():Observable<Array<Hotel>> {
        return this.hotelService.listAllHotels();
    }

    public delete(hotel:Hotel) {
        return this.hotelService.deleteHotel(null);
    }
}