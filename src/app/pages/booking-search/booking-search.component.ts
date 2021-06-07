import { Component, OnInit } from '@angular/core';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {
  
  public filter:BookingFilter;

  constructor() { }

  ngOnInit(): void {
    this.filter.clear();
  }

  checkFilter():void {
    
  }
}
