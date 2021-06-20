import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';
import { Room } from 'src/app/model/back-model/Room';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  public users: Room[];

  @Output() tableDataListener: EventEmitter<Room[]> = new EventEmitter();
  @Output() dataChange: EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate: EventEmitter<string[]> = new EventEmitter();
  @Output() modalData: EventEmitter<Room> = new EventEmitter();

  // constructor(private userProvider: HotelProvider) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    const _ = this;

    this.dataChange.subscribe(
      user => {
        // this.userProvider.deleteUser(user);
      }
    )
    // this.userProvider.getAllUsers().subscribe(
    //   data => {
    //     this.users = new Array<User>(data.length);

    //     for (let i = 0; i < data.length; i++) {
    //       this.users[i] = User.parse(data[i]);
    //     }

    //     this.tableDataListener.emit(this.users);
    //   },
    //   err => {

    //   }
    // );

  }

}