import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputObject } from 'src/app/model/front-model/Input';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {
  
  @Input() max:number = 0;
  @Input() min:number = 0;
  @Input() value:number = 0;
  @Input() id:string;
  @Output() currentValue:EventEmitter<InputObject<number>> = new EventEmitter();

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
    this.currentValue.emit(new InputObject());
  }
}
