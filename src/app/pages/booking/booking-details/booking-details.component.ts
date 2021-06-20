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

    this.iframeUrl = this.transform("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25357.03065203241!2d-6.024731597193085!3d37.39860915908186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126b936aa99ef3%3A0x74bc7a4c23b222d8!2sIsla%20M%C3%A1gica!5e0!3m2!1ses!2ses!4v1624160185117!5m2!1ses!2ses");
  }
  
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  counter(i: number) {
    return new Array(i);
  }

}
