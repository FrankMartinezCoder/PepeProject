import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  public iframeData: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.6318989774963!2d-6.005523084415448!3d37.37488594283777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c3f4bbae32d%3A0xaed44a05b0b7b278!2sCalle%20Virgen%20del%20Refugio%2C%2041011%20Sevilla!5e0!3m2!1ses!2ses!4v1623614963536!5m2!1ses!2ses";
  
  constructor() { }

  ngOnInit(): void {
  }

}
