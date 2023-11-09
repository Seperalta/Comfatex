import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Card {
  content: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setupCards(8); // Número de tarjetas en la ruleta
  }

  setupCards(count: number): void {
    for (let i = 0; i < count; i++) {
      this.cards.push({ content: `Card ${i + 1}` });
    }
  }

  getCardStyle(index: number): object {
    const rotation = (360 / this.cards.length) * index; // Distribución uniforme en círculo
    const transform = `rotate(${rotation}deg) translateX(250px) rotate(${-rotation}deg)`;
    return {
      transform: transform
    };
  }

}
