import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingFilter } from 'src/app/model/front-model/BookingFilter';
import { BookingProvider } from 'src/app/providers/booking.provider';
import { Room } from 'src/app/model/back-model/Room';
import { UserProvider } from 'src/app/providers/user.provider';
import { Router } from '@angular/router';

declare function hideModal(): boolean;

@Component({
  selector: 'app-booking-search',
  templateUrl: './booking-search.component.html',
  styleUrls: ['./booking-search.component.scss', './cards.scss']
})
export class BookingSearchComponent implements OnInit {

  public filter: BookingFilter = new BookingFilter();

  @Output() flowListener: EventEmitter<Room> = new EventEmitter();
  @Output() filterListener: EventEmitter<BookingFilter> = new EventEmitter();

  constructor(private bookingProvider: BookingProvider, private userProvider: UserProvider, private router:Router) { }
  private listener: EventEmitter<Array<Room>> = new EventEmitter();
  public roomList: Array<Room>;

  public fechaEntrada: string = "";
  public fechaSalida: string = "";

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

  public updateFecha(newFecha) {
    if (this.fechaEntrada.length) {
      let date = newFecha.split("-");

      this.filter.fechaEntrada.setDate(Number.parseInt(date[2]));
      this.filter.fechaEntrada.setMonth(Number.parseInt(date[1]) - 1);
      this.filter.fechaEntrada.setFullYear(Number.parseInt(date[0]));
    }

    if (this.fechaSalida.length) {
      let date = newFecha.split("-");

      this.filter.fechaSalida.setDate(Number.parseInt(date[2]));
      this.filter.fechaSalida.setMonth(Number.parseInt(date[1]) - 1);
      this.filter.fechaSalida.setFullYear(Number.parseInt(date[0]));
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
    if (this.userProvider.isUserLogged()) {
      $("#login-component,#login-background").fadeIn(500);
    }
    else {
      this.filterListener.emit(this.filter);
      this.flowListener.emit(this.roomList.find(room => room.habitacionID == idHabitacion));
    }
  }
  public searchRooms() {
    const _ = this;

    this.bookingProvider.getListFreeRooms(this.filter).subscribe(
      rooms => {
        console.log("rooms", rooms);
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

  public detalles(habitacionId: number) {
    localStorage.setItem('habitacionData', JSON.stringify(this.roomList.find(e => e.habitacionID == habitacionId)));
    this.router.navigate(['/booking/details']);
  }
}
