import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/back-model/User';

@Component({
  selector: 'app-tabla-gestion-user',
  templateUrl: './tabla-gestion-user.component.html',
  styleUrls: ['./tabla-gestion-user.component.scss']
})
export class TablaGestionUserComponent implements OnInit {
  @Input() public title: string;

  public editable:Array<boolean>;

  @Input() private tableDataListener: EventEmitter<User>;

  @Input() private dataChange: EventEmitter<User>;


  public users: User [];
  constructor() { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        this.users = data;

        this.editable = new Array(data.length).fill(false);
        
      }
    )
  }

  public editar(idx:number){
    this.editable[idx] = true;
  }

  public eliminar(item: User){
    this.dataChange.emit(item);
  }

}
