import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.scss']
})
export class HotelManagementComponent implements OnInit {

  public title = "Registro de Hoteles";

  @Output() TableDataListener:EventEmitter<Hotel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
