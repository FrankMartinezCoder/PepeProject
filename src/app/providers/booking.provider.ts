import { EventEmitter, Injectable } from "@angular/core";
import { Booking } from "../model/back-model/Booking";
import { Room } from "../model/back-model/Room";
import { BookingFilter } from "../model/front-model/BookingFilter";
import { BookingService } from "../services/booking-service.service";
declare function showModal(): boolean;
@Injectable({
    providedIn: 'root'
})

export class BookingProvider {

    public bookingsObserver = new EventEmitter<Booking[]>();
    public bookingObserver = new EventEmitter<Booking>();
    public roomObserver = new EventEmitter<Room>();

    constructor(private bookingService: BookingService) { }

    public getListFreeRooms(bookingFilter: BookingFilter) {
        showModal();
        return this.bookingService.getFreeRoomList(bookingFilter.getData());
    }

    public createBooking() {

    }
}