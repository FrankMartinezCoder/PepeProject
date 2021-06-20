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
  @Input() private modalData: EventEmitter<Management>;
  @Input() private modalUpdate: EventEmitter<Management>;
  public list: Management [];
  constructor() { }

  ngOnInit(): void {
    this.modalData.subscribe(
      data => {
        console.log("data",data);
        
        this.list = new Array(data.length);
        for (let i = 0; i < data.length; i++) {
          this.list[i] = User.parse(data[i]);
        }
        if (this.list.length) {
          this.fields =this.list[0].getFields();
        }
      }
    )
    console.log('fields' , this.fields);
  }


  public send() {
    this.modalUpdate.emit();
  }
}
