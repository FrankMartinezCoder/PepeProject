import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';
import { HotelProvider } from 'src/app/providers/hotel.provider';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.scss']
})
export class HotelManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  public hotels: Hotel[];

  @Output() tableDataListener: EventEmitter<Hotel[]> = new EventEmitter();
  @Output() dataChange: EventEmitter<string[]> = new EventEmitter();
  @Output() dataDelete: EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate: EventEmitter<string[]> = new EventEmitter();
  @Output() modalData: EventEmitter<Hotel> = new EventEmitter();

  constructor(private hotelProvider:HotelProvider) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    const _ = this;

    this.dataChange.subscribe(
      hotel => {
        this.hotelProvider.modify(hotel);
      }
    )
    this.hotelProvider.listAll().subscribe(
      data => {
        this.hotels = new Array<Hotel>(data.length);

        for (let i = 0; i < data.length; i++) {
          this.hotels[i] = Hotel.parse(data[i]);
        }

        this.tableDataListener.emit(this.hotels);
      },
      err => {

      }
    );

  }

}