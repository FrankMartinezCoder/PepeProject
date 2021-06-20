import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';
import { Management } from 'src/app/model/back-model/management.interface';
import { Room } from 'src/app/model/back-model/Room';
import { User } from 'src/app/model/back-model/User';

@Component({
  selector: 'app-tabla-gestion',
  templateUrl: './tabla-gestion.component.html',
  styleUrls: ['./tabla-gestion.component.scss']
})
export class TablaGestionComponent implements OnInit {
  @Input() public title: string;
  public colums: string[];
  @Input() private tableDataListener: EventEmitter<Management>;

  @Input() private dataChange: EventEmitter<Management>;


  public list: Management [];
  constructor() { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.list = data;

        if (this.list.length) {
          this.colums =this.list[0].getColumns();
        }
      }
    )
  }

  public editar(item: Management){
    this.dataChange.emit(item);
  }

  public eliminar(item: Management){
    if (item instanceof Room) {
      
    }else if(item instanceof User){

    }else if(item instanceof Hotel){

    }else{

    }
  }

}
