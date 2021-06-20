import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';

@Component({
  selector: 'app-tabla-gestion-hotel',
  templateUrl: './tabla-gestion-hotel.component.html',
  styleUrls: ['./tabla-gestion-hotel.component.scss']
})
export class TablaGestionHotelComponent implements OnInit {
  @Input() public title: string;
  public colums: string[];

  public editable:Array<boolean>;

  @Input() private tableDataListener: EventEmitter<Hotel>;

  @Input() private dataChange: EventEmitter<Hotel>;


  public list: Hotel [];
  constructor() { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.list = data;
        this.editable = new Array(data.length).fill(false);
        
      }
    )
  }

  public editar(idx:number){
    this.editable[idx] = true;
  }

  public eliminar(item: Hotel){
    this.dataChange.emit(item);
  }

}
