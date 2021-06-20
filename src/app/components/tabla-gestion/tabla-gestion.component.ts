import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() private dataChange: EventEmitter<Management>;


  public list: Management [];
  constructor() { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.list = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          this.list[i] = User.parse(data[i]);
        }
        if (this.list.length) {
          this.colums =this.list[0].getColumns();
        }
        console.log("list ",this.list);

      }
    )
  }

  public editar(item: Management){
    if (item instanceof Room) {
      console.log('editando: ' , item);
    }else if(item instanceof User){
      console.log('editando: ' , item);
    }else if(item instanceof Hotel){
      console.log('editando: ' , item);
    }else{
      console.log('editando: ' , item);
    }
  }

  public eliminar(item: Management){
    if (item instanceof Room) {
      
    }else if(item instanceof User){

    }else if(item instanceof Hotel){

    }else{

    }
  }

}
