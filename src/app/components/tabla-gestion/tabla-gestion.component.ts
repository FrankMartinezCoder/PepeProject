import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-gestion',
  templateUrl: './tabla-gestion.component.html',
  styleUrls: ['./tabla-gestion.component.scss']
})
export class TablaGestionComponent implements OnInit {
  @Input() public title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
