import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }
  /*
  
  para cuando el usuario no ha sido logado.
  this.router.navigate(['/login']);  
  
  */
  ngOnInit(): void {
  }

}
