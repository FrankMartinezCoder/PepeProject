import { Component, OnInit } from '@angular/core';
import * as data from './hoteles.json';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  hoteles: any = (data as any).default;

  ngOnInit(): void {
    console.log(data[1].title);
  }

}
