import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  
  @Input('max') max:number = 0;
  @Input('min') min:number = 0;
  @Input('value') value:number = 0;
  @Input('id') id:string;
  @Output() currentValue:EventEmitter<object> = new EventEmitter();

  public plus() {
    if(this.value < this.max) {
      this.value++;
    }
    this.updateOutput();
  }

  public less() {
    if(this.value > this.min) {
      this.value--;
    }
    this.updateOutput();
  }

  public checkValue() {
    if(this.value < this.min) {
      this.value = this.min;
    }
    if(this.value > this.max) {
      this.value = this.max;
    }
    this.updateOutput();
  }

  public updateOutput() {
    this.currentValue.emit({
      'id':this.id,
      'value':this.value
    });
  }
}
