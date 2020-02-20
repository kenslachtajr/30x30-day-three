import { Component, OnInit } from '@angular/core';
import { Fruits, FruitsService } from '@fruits/core-data';

@Component({
  selector: 'fruits-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  fruits$;
  selectedFruit: Fruits;

  constructor(private fruitsService: FruitsService) { }

  resetFruits() {
    const emptyFruit: Fruits = {
      id: null,
      name: '',
      details: '',
      tasteLevel: null,
      approved: null
    }
    this.selectFruit(emptyFruit);
  }

  ngOnInit() {
    this.getFruits();
    this.resetFruits();
  }

  selectFruit(fruit) {
    this.selectedFruit = fruit;
  }

  getFruits() {
    this.fruits$ = this.fruitsService.all();
  }

  saveFruit(fruit) {
    if(!fruit.id) {
      this.createFruit(fruit);
    } else {
      this.updateFruit(fruit);
    }
  }

  updateFruit(fruit) {
    this.fruitsService.update(fruit)
    .subscribe(result => {
      this.getFruits();
      this.resetFruits();
    });
  }

  createFruit(fruit) {
    this.fruitsService.create(fruit)
    .subscribe(result => {
      this.getFruits();
      this.resetFruits();
    });
  }

  deleteFruit(fruit) {
    this.fruitsService.delete(fruit.id)
    .subscribe(result => this.getFruits());
    this.resetFruits();
  }

  cancel() {
    this.resetFruits();
  }

}
