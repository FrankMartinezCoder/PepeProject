import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';
import { User } from 'src/app/model/back-model/User';

@Component({
  selector: 'app-modal-gestion',
  templateUrl: './modal-gestion.component.html',
  styleUrls: ['./modal-gestion.component.scss']
})
export class ModalGestionComponent implements OnInit {
  public fields: string[];
  @Input() private tableDataListener: EventEmitter<Management>;
  public list: Management [];
  constructor() { }

  ngOnInit(): void {
    this.tableDataListener.subscribe(
      data => {
        if (this.list.length) {
          this.fields =this.list[0].getFields();
        }
      }
    )
  }

}
