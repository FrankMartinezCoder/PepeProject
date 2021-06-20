import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';

@Component({
  selector: 'app-modal-gestion',
  templateUrl: './modal-gestion.component.html',
  styleUrls: ['./modal-gestion.component.scss']
})
export class ModalGestionComponent implements OnInit {
  public fields: string[];
  @Input() private modalData: EventEmitter<Management>;
  @Input() private modalUpdate: EventEmitter<Management>;
  public elem: Management;
  constructor() { }

  ngOnInit(): void {
    this.modalData.subscribe(
      data => {
        this.elem = data;
        this.fields = data.getFields();
        this.show();
      }
    )
  }

  public show() {
    $("#modal_gestion-component, #modal_gestion-background").fadeIn(300);

  }

  public close() {
    $("#modal_gestion-component, #modal_gestion-background").fadeOut(300);
    this.reset();
  }

  public reset() {
    this.elem = null;
  }


  public send() {
    this.modalUpdate.emit(this.elem);
    this.close();
  }
}
