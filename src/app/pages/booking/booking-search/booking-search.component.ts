import { Component, OnInit, Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss']
})
export class BookingSearchComponent implements OnInit {

  public filter: BookingFilter = new BookingFilter();
  currDate: string;

  constructor(private dp: DatePipe ) {
    this.currDate = dp.transform(Date.now(),'dd/MM/yyyy', "en");
    console.log(this.currDate);
  }

  ngOnInit(): void {
    this.currDate = this.dp.transform( new Date(Date.now()), 'dd-MM-yyyy' );
  }

  public plus(elem: number) {
    let data:number = elem==1?this.filter.numOccupant:(elem==2?this.filter.minPrice:this.filter.maxPrice);
    
    if (data < 99) {
      data++;
    }
    if (data < 1) {
      data = 1;
    }
    switch (elem) {
      case 1:
        this.filter.numOccupant = data;
        break
      case 2:
        this.filter.minPrice = data;
        break
      case 3:
        this.filter.maxPrice = data;
        break
    }
  }

  public less(elem: number) {
    let data:number = elem==1?this.filter.numOccupant:(elem==2?this.filter.minPrice:this.filter.maxPrice);
  
    if (data > 1) {
      data--;
    }
    if (data > 99) {
      data = 99;
    }

    switch (elem) {
      case 1:
        this.filter.numOccupant = data;
        break
      case 2:
        this.filter.minPrice = data;
        break
      case 3:
        this.filter.maxPrice = data;
        break
    }
  }
  public checkNumOccupant() {
    if (this.filter.numOccupant > 99) {
      this.filter.numOccupant = 99;
    }
    if (this.filter.numOccupant < 1) {
      this.filter.numOccupant = 1;
    }
  }
  public clearData() {   
    this.filter.clear();
  }

  public searchRooms() {
    
  }
}
