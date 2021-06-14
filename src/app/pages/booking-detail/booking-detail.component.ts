import { Component, OnInit } from '@angular/core';
import { HotelDataMock } from 'src/app/config/GetHoteles';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./../booking-details/booking-details.component.scss']
})
export class BookingDetailComponent implements OnInit {

  constructor() { }

  public hoteles: object = HotelDataMock.data;

  ngOnInit(): void {
    console.log(this.hoteles);
  }

  counter(i: number) {
    return new Array(i);
  }

}
