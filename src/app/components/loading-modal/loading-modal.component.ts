import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.scss']
})
export class LoadingModalComponent implements OnInit {
  public text: string = "Loading.";
  private count: number = 1;
  ngOnInit() {
    const _ = this;
    let interval = setInterval(function () {
      _.count++;
      switch (_.count) {
        case 1:
          _.showText("Loading.");
          break;
          case 2:
          _.showText("Loading..");
          break;
          case 3:
          _.showText("Loading...");
          _.count = 0;
          break;
      }
    }, 1000);
  }

  private showText(txt: string) {
    this.text = txt;
  }
}
