import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/model/back-model/BackendService';

@Component({
  selector: 'app-tabla-gestion-service',
  templateUrl: './tabla-gestion-service.component.html',
  styleUrls: ['./tabla-gestion-service.component.scss']
})
export class TablaGestionServiceComponent implements OnInit {
  @Input() public title: string;
  public colums: string[];

  public editable:Array<boolean>;

  @Input() private tableDataListener: EventEmitter<BackendService>;

  @Input() private dataChange: EventEmitter<BackendService>;


  public list: BackendService [];
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

  public eliminar(item: BackendService){
    this.dataChange.emit(item);
  }

}
