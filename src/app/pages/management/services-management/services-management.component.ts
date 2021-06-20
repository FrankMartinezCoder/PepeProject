import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendService } from 'src/app/model/back-model/BackendService';
import { ServicesProvider } from 'src/app/providers/hotel_services.provider';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit {

  public title: string = "Registro de Usuarios";

  public users: BackendService[];

  @Output() tableDataListener: EventEmitter<BackendService[]> = new EventEmitter();
  @Output() dataChange: EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate: EventEmitter<string[]> = new EventEmitter();
  @Output() modalData: EventEmitter<BackendService> = new EventEmitter();

  constructor(private serviceProvider: ServicesProvider) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  private getUsuarios() {
    const _ = this;

    this.dataChange.subscribe(
      user => {
        // this.serviceProvider.deleteUser(user);
      }
    )
    // this.serviceProvider.getServicesFromHotelId().subscribe(
    //   data => {
    //     this.users = new Array<BackendService>(data.length);

    //     for (let i = 0; i < data.length; i++) {
    //       this.users[i] = BackendService.parse(data[i]);
    //     }

    //     this.tableDataListener.emit(this.users);
    //   },
    //   err => {

    //   }
    // );

  }

}