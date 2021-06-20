import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from 'src/app/model/back-model/Hotel';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.scss']
})
export class HotelManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  public users: Hotel[];

  @Output() tableDataListener: EventEmitter<Hotel[]> = new EventEmitter();
  @Output() dataChange: EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate: EventEmitter<string[]> = new EventEmitter();
  @Output() modalData: EventEmitter<Hotel> = new EventEmitter();

  // constructor(private userProvider: UserProvider) { }
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