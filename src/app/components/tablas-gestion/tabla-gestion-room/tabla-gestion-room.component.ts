import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/model/back-model/Room';

@Component({
  selector: 'app-tabla-gestion-room',
  templateUrl: './tabla-gestion-room.component.html',
  styleUrls: ['./tabla-gestion-room.component.scss']
})
export class TablaGestionRoomComponent implements OnInit {
  @Input() public title: string;
  public colums: string[];

  public editable:Array<boolean>;

  @Input() private tableDataListener: EventEmitter<Room>;

  @Input() private dataChange: EventEmitter<Room>;


  public list: Room [];
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

  public eliminar(item: Room){
    this.dataChange.emit(item);
  }

}
