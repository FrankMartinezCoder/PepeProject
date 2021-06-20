import { Component, OnInit, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BackendService } from 'src/app/model/back-model/BackendService';
import { Booking } from 'src/app/model/back-model/Booking';
import { Room } from 'src/app/model/back-model/Room';
import { ServicesProvider } from 'src/app/providers/hotel_services.provider';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit, PipeTransform {

  public room: Room;
  public booking: Booking;

  public iframeUrl: SafeResourceUrl;
  public servicios: Array<BackendService>;
  public pensiones: Array<BackendService>;

  public isBooking:boolean = false;


  constructor(private sanitizer: DomSanitizer, private serviceProvider: ServicesProvider) { }


  ngOnInit(): void {
    this.isBooking = localStorage.getItem('DetailView_isBooking') == 'true';
    
    

    if(this.isBooking) {
      

      
    }
    else {
      this.room = JSON.parse(localStorage.getItem('habitacionData'));
      this.iframeUrl = this.transform("http://" + this.room.hotelID.localizacion);

      localStorage.removeItem('habitacionData')
    }
    
    localStorage.removeItem('DetailView_isBooking');
    
    this.serviceProvider.getServicesFromHotelId({ 'esPension':false,'hotelID': this.room.hotelID.hotelID }).subscribe(
      service => {
        this.servicios = new Array<BackendService>(service.length);

        for (let id in service) {
          this.servicios[id] = BackendService.parse(service[id]);
        }
      }
    );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  counter(i: number) {
    return new Array(i);
  }

}
