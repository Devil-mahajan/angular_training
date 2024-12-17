import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() count : number = 0;
  @Output() changeCount = new EventEmitter<number> ();

  onIncrement(){
    this.count++;
    this.changeCount.emit(this.count)
  }

  onDecrement(){
    this.count--;
    this.changeCount.emit(this.count)
  }

}
