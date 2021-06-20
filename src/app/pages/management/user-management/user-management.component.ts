import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/back-model/User';
import { UserProvider } from 'src/app/providers/user.provider';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";
  @Output() tableDataListener:EventEmitter<User[]> = new EventEmitter();

  constructor(private userProvider: UserProvider) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios(){
    const _ = this;

    this.userProvider.getAllUsers().subscribe(
      data => {
        console.log('usuarios ', data);
        this.tableDataListener.emit(data);
      },
      err => {

      }
      );

  }

}
