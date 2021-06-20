import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';
import { Room } from 'src/app/model/back-model/Room';

@Component({
  selector: 'app-room-management',
  templateUrl: './room-management.component.html',
  styleUrls: ['./room-management.component.scss']
})
export class RoomManagementComponent implements OnInit {

  // constructor(private roomProvider: RoomProvider) { }
  @Output() tableDataListener:EventEmitter<Room[]> = new EventEmitter();
  @Output() dataChange:EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate:EventEmitter<string[]> = new EventEmitter();
  @Output() modalData:EventEmitter<Management> = new EventEmitter();
  public rooms: Room[];

  ngOnInit(): void {
        /*const _ = this;

    this.dataChange.subscribe(
      done => {
        this.modalData.emit(done);
      }
    )
    this.hotelProvider.getAllRooms().subscribe(
      data => {
        this.hoteles = new Array<Room>(data.length);
        
        for (let i = 0; i < data.length; i++) {
          this.rooms[i] = Room.parse(data[i]);
        }

        this.tableDataListener.emit(this.rooms);
      },
      err => {

      }
      );*/

  }

}
