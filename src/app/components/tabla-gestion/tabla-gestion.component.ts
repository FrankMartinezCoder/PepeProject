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

  public editable:Array<boolean>;

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
        this.editable = new Array(data.length).fill(false);
        
      }
    )
  }

  public editar(idx:number){
    this.editable[idx] = true;
  }

  public eliminar(item: Management){
    this.dataChange.emit(item);
  }

}
