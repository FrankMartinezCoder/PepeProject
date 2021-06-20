import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';
import { User } from 'src/app/model/back-model/User';
import { UserProvider } from 'src/app/providers/user.provider';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  public users:User[];

  @Output() tableDataListener:EventEmitter<User[]> = new EventEmitter();
  @Output() dataChange:EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate:EventEmitter<string[]> = new EventEmitter();
  @Output() modalData:EventEmitter<Management> = new EventEmitter();

  constructor(private userProvider: UserProvider) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios(){
    const _ = this;

    this.dataChange.subscribe(
      done => {
        this.modalData.emit(done);
      }
    )
    this.userProvider.getAllUsers().subscribe(
      data => {
        this.users = new Array<User>(data.length);
        
        for (let i = 0; i < data.length; i++) {
          this.users[i] = User.parse(data[i]);
        }

        this.tableDataListener.emit(this.users);
      },
      err => {

      }
      );

  }

}
