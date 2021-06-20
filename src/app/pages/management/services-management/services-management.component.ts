import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Management } from 'src/app/model/back-model/management.interface';
import { Service } from 'src/app/model/front-model/Service';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss']
})
export class ServicesManagementComponent implements OnInit {

  // constructor(private serviceProvider: ServiceProvider) { }
  @Output() tableDataListener:EventEmitter<Service[]> = new EventEmitter();
  @Output() dataChange:EventEmitter<string[]> = new EventEmitter();
  @Output() modalUpdate:EventEmitter<string[]> = new EventEmitter();
  @Output() modalData:EventEmitter<Management> = new EventEmitter();
  public servicios: Service[];

  ngOnInit(): void {
        /*const _ = this;

    this.dataChange.subscribe(
      done => {
        this.modalData.emit(done);
      }
    )
    this.hotelProvider.getAllServices().subscribe(
      data => {
        this.servicios = new Array<Service>(data.length);
        
        for (let i = 0; i < data.length; i++) {
          this.servicios[i] = Service.parse(data[i]);
        }

        this.tableDataListener.emit(this.servicios);
      },
      err => {

      }
      );*/

  }

}
