import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})

export class CarruselComponent implements OnInit {
  
  cards: any[] = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: 'assets/img/poke1.png',
      circles: [
        { color: 'red' },
        { color: 'red' },
        { color: 'red' }
      ]
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: 'assets/img/poke2.png',
      circles: [
        { color: 'orange' },
        { color: 'purple' },
        { color: 'pink' }
      ]
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Description for Card 3',
      imageUrl: 'assets/img/poke3.png',
      circles: [
        { color: 'yellow' },
        { color: 'brown' },
        { color: 'cyan' }
      ]
    },
    {
      id: 4,
      title: 'Vamos los millos',
      description: 'Nos robaron...',
      imageUrl: 'assets/img/poke4.png',
      circles: [
        { color: 'blue' },
        { color: 'white' },
        { color: 'blue' }
      ]
    },
    // Agrega más tarjetas según sea necesario
  ];

  centerIndex = 0;
  visibleCards: any[] = [];

  ngOnInit(): void {
    this.updateVisibleCards();
  }

  prevCard(): void {
    this.centerIndex = (this.centerIndex - 1 + this.cards.length) % this.cards.length;
    this.updateVisibleCards();
  }

  nextCard(): void {
    this.centerIndex = (this.centerIndex + 1) % this.cards.length;
    this.updateVisibleCards();
  }

  updateVisibleCards(): void {
    const numVisible = 3; // Número de tarjetas visibles a la vez
    const start = (this.centerIndex - Math.floor(numVisible / 2) + this.cards.length) % this.cards.length;
    this.visibleCards = Array.from({ length: numVisible }, (_, i) => this.cards[(start + i) % this.cards.length]);
  }
}