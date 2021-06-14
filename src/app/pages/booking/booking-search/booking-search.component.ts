import { Component, OnInit, Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';
import { DatePipe, formatDate } from '@angular/common';
import { Booking } from 'src/app/model/back-model/Booking';
import { BookingProvider } from 'src/app/providers/booking.provider';

declare function hideModal(): boolean;

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {

  public filter: BookingFilter = new BookingFilter();
  currDate: string;

  constructor(private bookingProvider: BookingProvider, private dp: DatePipe) {
    this.currDate = dp.transform(Date.now(),'dd/MM/yyyy', "en");
    console.log(this.currDate);
  }

  public bookingList: Booking[];
  public bookingPaged: Array<Booking>;
  public lastPage: number;

  ngOnInit(): void {
    this.currDate = this.dp.transform( new Date(Date.now()), 'dd-MM-yyyy' );

    this.filter.clear();
  }

  public plus(elem: number) {
    let data: number = elem == 1 ? this.filter.ocupantes : (elem == 2 ? this.filter.precio1 : this.filter.precio2);

    if (data < 99) {
      data++;
    }
    if (data < 1) {
      data = 1;
    }
    switch (elem) {
      case 1:
        this.filter.ocupantes = data;
        break
      case 2:
        this.filter.precio1 = data;
        break
      case 3:
        this.filter.precio2 = data;
        break
    }
  }

  public less(elem: number) {
    let data: number = elem == 1 ? this.filter.ocupantes : (elem == 2 ? this.filter.precio1 : this.filter.precio2);

    if (data > 1) {
      data--;
    }
    if (data > 99) {
      data = 99;
    }

    switch (elem) {
      case 1:
        this.filter.ocupantes = data;
        break
      case 2:
        this.filter.precio1 = data;
        break
      case 3:
        this.filter.precio2 = data;
        break
    }
  }
  public checkNumOccupant() {
    if (this.filter.ocupantes > 99) {
      this.filter.ocupantes = 99;
    }
    if (this.filter.ocupantes < 1) {
      this.filter.ocupantes = 1;
    }
  }
  public clearData() {
    this.filter.clear();
  }
  private createPagination() {

  }
  public searchRooms() {
    const _ = this;
    console.log(this.filter);
    
    this.bookingProvider.getListFreeRooms(this.filter).subscribe(
      bookings => {
        console.log("rooms",bookings);
        
        let timeOut = setTimeout(function () {
          hideModal()
          _.bookingList = bookings;
          _.createPagination();
          clearTimeout(timeOut);
        }, 1200);
      },
      err => {
        let timeOut = setTimeout(function () {
          hideModal()
          clearTimeout(timeOut);
        }, 1200);
      }
    );
  }
}
