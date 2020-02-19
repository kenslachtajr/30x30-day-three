import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Fruits } from '@fruits/core-data';


@Component({
  selector: 'fruits-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.scss']
})
export class FruitsDetailsComponent {
  currentFruit: Fruits;
  originalName;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set fruit(value) {
    if (value) this.originalName = value.name;
    this.currentFruit = Object.assign({}, value)
  }
}
