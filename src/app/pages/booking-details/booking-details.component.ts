import { Component, OnInit } from '@angular/core';
import { HotelDataMock } from 'src/app/config/GetHoteles';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  public hoteles: object = HotelDataMock.data;

  ngOnInit(): void {
    console.log(this.hoteles);
  }

  counter(i: number) {
    return new Array(i);
}

}
