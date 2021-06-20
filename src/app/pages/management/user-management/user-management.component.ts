import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/back-model/User';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  @Output() TableDataListener:EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
