import { Component, OnInit, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Room } from 'src/app/model/back-model/Room';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit, PipeTransform {

  public room: Room;
  public iframeUrl:SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  
  ngOnInit(): void {
    this.room = JSON.parse(localStorage.getItem('habitacionData'));
    console.log(this.room);
    
    this.iframeUrl = this.transform("http://"+this.room.hotelID.localizacion);
  }
  
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  counter(i: number) {
    return new Array(i);
  }

}
