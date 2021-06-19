import { Component, OnInit } from '@angular/core';
import { Room } from '../model/back-model/Room';
import { BookingProvider } from '../providers/booking.provider';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {
  public reservas:Array<Room>;
  constructor(private bookingProvider:BookingProvider) { }

  ngOnInit(): void {
    this.bookingProvider.getBookingFromUser();
  }

}
