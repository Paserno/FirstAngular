import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3 class="letraGrande">Counter: {{counter}}</h3>

    <button (click)="increaseBy(1)" class="parrafo">+1 </button>
    <button (click)="resetCounter()" class="parrafo">Reset </button>
    <button (click)="increaseBy(-1)" class="parrafo">-1 </button>

  `,
  styleUrls: ['../app.component.css'],
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value
  }

  resetCounter():void {
    this.counter = 10;
  }
}


