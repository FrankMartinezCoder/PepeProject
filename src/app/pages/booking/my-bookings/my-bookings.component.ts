import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/back-model/Booking';
import { Room } from 'src/app/model/back-model/Room';
import { BookingProvider } from 'src/app/providers/booking.provider';

declare function hideModal();

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss','./cards.scss']
})
export class MyBookingsComponent implements OnInit {
  public loadedComponent:boolean = false;
  public bookingList:Array<Booking> = null;

  constructor(private bookingProvider:BookingProvider) { }

  ngOnInit(): void {

    this.bookingProvider.getBookingFromUser().subscribe(
      bookingsId => {
        this.bookingProvider.getListBookings().subscribe(
          bookings => {
            hideModal();
            console.log(bookings);
            
            this.loadedComponent = true;
            this.bookingList = bookings.filter(booking=> bookingsId.indexOf(booking.reservaID)!=-1);
            
          },
          err => {
            hideModal();
            this.loadedComponent = true;
          }
        )
      },
      err => {
        hideModal();
        this.loadedComponent = true;
      }
    );

  }

}
