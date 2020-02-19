import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fruits } from '@fruits/core-data';

@Component({
  selector: 'fruits-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent {
  @Input() fruits: Fruits[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  select(fruit) {
    console.log(fruit, 'This is a test in the list comp')
    this.selected.emit(fruit);
  }
}
