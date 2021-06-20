import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaticPages } from 'src/app/config/pageUrls';
import { Hotel } from 'src/app/model/back-model/Hotel';

@Component({
  selector: 'app-tabla-gestion-hotel',
  templateUrl: './tabla-gestion-hotel.component.html',
  styleUrls: ['./tabla-gestion-hotel.component.scss']
})
export class TablaGestionHotelComponent implements OnInit {
  @Input() public title: string;

  public editable: Array<boolean>;

  @Input() private tableDataListener: EventEmitter<Hotel>;

  @Input() private dataChange: EventEmitter<Hotel>;
  @Input() private dataDelete: EventEmitter<Hotel>;


  public hotels: Hotel[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.hotels = data;

        this.editable = new Array(data.length).fill(false);
      }
    )
  }

  public editar(idx: number) {
    this.editable[idx] = true;
  }

  public eliminar(item: Hotel) {
    this.dataDelete.emit(item);
    this.reload();
  }

  public actualizar(item: Hotel, idx: number) {
    this.dataChange.emit(item);
    this.cancelarActualizar(idx);
    this.reload();
  }

  public cancelarActualizar(idx: number) {
    this.editable[idx] = false;
  }

  private reload() {
    this.router.navigateByUrl(StaticPages.hotelManagement);
  }
}
