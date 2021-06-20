import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/model/back-model/Booking';
import { Room } from 'src/app/model/back-model/Room';
import { BookingProvider } from 'src/app/providers/booking.provider';

declare function hideModal();
declare function showModal();

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss','./cards.scss']
})
export class MyBookingsComponent implements OnInit {
  public loadedComponent:boolean = false;
  public bookingList:Array<Booking> = null;

  constructor(private bookingProvider:BookingProvider, private router:Router) { }

  ngOnInit(): void {

    this.bookingProvider.getBookingFromUser().subscribe(
      bookingsId => {
        this.bookingProvider.getListBookings().subscribe(
          bookings => {
            hideModal();            
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

  public verReserva (reservaId:number) {
    localStorage.setItem('DetailView_isBooking','true');
    localStorage.setItem('bookingInfo',JSON.stringify(this.bookingList.find(book=>book.reservaID == reservaId)));
    this.router.navigate(['/booking/details']);
    
  }

  public cancel (reservaId:number) {
    showModal();
    this.bookingProvider.cancelBooking(reservaId).subscribe(
      done => {
        hideModal();
        this.bookingList.find(e=>e.reservaID == reservaId).esCancelacion = true;
      },
      err => hideModal()
    )
  }
}
