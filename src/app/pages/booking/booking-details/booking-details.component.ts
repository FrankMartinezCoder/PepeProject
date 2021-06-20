import { Component, OnInit, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BackendService } from 'src/app/model/back-model/BackendService';
import { Room } from 'src/app/model/back-model/Room';
import { ServicesProvider } from 'src/app/providers/hotel_services.provider';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit, PipeTransform {

  public room: Room;
  public iframeUrl: SafeResourceUrl;
  public servicios: Array<BackendService>;
  public pensiones: Array<BackendService>;

  public isBooking:boolean = false;


  constructor(private sanitizer: DomSanitizer, private serviceProvider: ServicesProvider) { }


  ngOnInit(): void {
    this.room = JSON.parse(localStorage.getItem('habitacionData'));
    console.log(this.room);

    this.iframeUrl = this.transform("http://" + this.room.hotelID.localizacion);

    this.serviceProvider.getServicesFromHotelId({ 'esPension':false,'hotelID': this.room.hotelID.hotelID }).subscribe(
      service => {
        this.servicios = new Array<BackendService>(service.length);

        for (let id in service) {
          this.servicios[id] = BackendService.parse(service[id]);
        }
      }
    );
    // this.serviceProvider.getServicesFromHotelId({ 'esPension':true,'hotelID': this.room.hotelID.hotelID }).subscribe(
    //   pensiones => {
    //     this.pensiones = new Array<BackendService>(pensiones.length);

    //     for (let id in pensiones) {
    //       this.pensiones[id] = BackendService.parse(pensiones[id]);
    //     }
    //   }
    // );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  counter(i: number) {
    return new Array(i);
  }

}
