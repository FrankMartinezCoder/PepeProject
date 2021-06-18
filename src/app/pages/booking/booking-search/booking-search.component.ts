import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';
import { BookingProvider } from 'src/app/providers/booking.provider';
import { Room } from 'src/app/model/back-model/Room';

declare function hideModal(): boolean;

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss','./cards.scss']
})
export class BookingSearchComponent implements OnInit {

  public filter: BookingFilter = new BookingFilter();

  @Output() flowListener:EventEmitter<Room> = new EventEmitter();

  constructor(private bookingProvider: BookingProvider) {
  }
  private listener:EventEmitter<Array<Room>> = new EventEmitter();
  public roomList: Array<Room>;

  ngOnInit(): void {
    this.filter.clear();
    this.filter.ocupantes = 2;
    this.filter.precio2 = 1000;

  
    this.listener.subscribe(
      data => {
        this.roomList = data;
      }
    )
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
  public reservar(idHabitacion) {
    //this.flow.start(this.roomList.find(room => room.habitacionID==idHabitacion));
    this.flowListener.emit(this.roomList.find(room => room.habitacionID==idHabitacion));   
  }
  public searchRooms() {
    const _ = this;
    
    this.bookingProvider.getListFreeRooms(this.filter).subscribe(
      rooms => {
        console.log("rooms",rooms);
        let timeOut = setTimeout(function () {
          hideModal()
          let roomsFormated = new Array<Room>(rooms.length);
          for (let i = 0; i < rooms.length; i++) {
            roomsFormated[i] = Room.parse(rooms[i]);
          }
          console.log(roomsFormated);
          _.listener.emit(roomsFormated);
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
