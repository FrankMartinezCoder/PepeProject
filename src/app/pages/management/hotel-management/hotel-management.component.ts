import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';
import { Management } from 'src/app/model/back-model/management.interface';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.scss']
})
export class HotelManagementComponent implements OnInit {

  public title = "Registro de Hoteles";

  @Output() TableDataListener:EventEmitter<Hotel> = new EventEmitter();
  @Output() dataChange:EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate:EventEmitter<string[]> = new EventEmitter();
  @Output() modalData:EventEmitter<Management> = new EventEmitter();

  public hoteles:Hotel[];
  // constructor(private hotelProvider: HotelProvider ) { }

  ngOnInit(): void {
    /*const _ = this;

    this.dataChange.subscribe(
      done => {
        this.modalData.emit(done);
      }
    )
    this.hotelProvider.getAllHotels().subscribe(
      data => {
        this.hoteles = new Array<User>(data.length);
        
        for (let i = 0; i < data.length; i++) {
          this.hoteles[i] = Hotel.parse(data[i]);
        }

        this.tableDataListener.emit(this.hoteles);
      },
      err => {

      }
      );*/

  }

}
