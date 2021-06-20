import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Booking } from "../model/back-model/Booking";
import { Room } from "../model/back-model/Room";
import { BookingFilter } from "../model/front-model/BookingFilter";
import { BookingService } from "../services/booking-service.service";
import { UserProvider } from "./user.provider";
declare function showModal(): boolean;
@Injectable({
    providedIn: 'root'
})

export class BookingProvider {

    public bookingsObserver = new EventEmitter<Booking[]>();
    public bookingObserver = new EventEmitter<Booking>();
    public roomObserver = new EventEmitter<Room>();

    constructor(private bookingService: BookingService, private userProvider: UserProvider) { }

    public getListFreeRooms(bookingFilter: BookingFilter): Observable<Room[]> {
        showModal();
        return this.bookingService.getFreeRoomList(bookingFilter.getData());
    }

    public getBookingFromUser(): Observable<number[]> {
        showModal();
        return this.bookingService.getBookingFromUser({ 'email': this.userProvider.getUserLogged().email });
    }
    public getListBookings(): Observable<Booking[]> {
        showModal();
        return this.bookingService.getListBookings();
    }
    public addBooking(adultos: number, jovenes: number, infantes: number, fechaEntrada: string, fechaSalida: string, usuarioID: number, hotelID: number, habitacionID: number, costeTotal: number, costeBase: number = 0): Observable<void> {
        let params = {
            'adultos': adultos,
            'jovenes': jovenes,
            'infantes': infantes,
            'usuarioID': usuarioID,
            'hotelID': hotelID,
            'habitacionID': habitacionID,
            'fechaEntrada': fechaEntrada,
            'fechaSalida': fechaSalida,
            'costeTotal': costeTotal,
            'costeBase': costeBase
        }

        return this.bookingService.addBookingRoom(params);
    }

    public cancelBooking(reservaId:number): Observable<void> {
        console.log(reservaId);
        
        return this.bookingService.cancelBooking({'reservaID':reservaId});
    }
}