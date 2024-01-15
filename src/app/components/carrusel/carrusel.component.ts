import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

interface Product {
  name: string;
  imagenURL: string;
  price: number;
  inventoryStatus: string;
}

interface CarouselResponsiveOptions {
  breakpoint: string;
  numVisible: number;
  numScroll: number;
}


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})

export class CarruselComponent {

  products: Product[] = [
    { name: 'Producto 1',  imagenURL: 'assets/img/poke1.png', price: 1000, inventoryStatus: 'In Stock' },
    { name: 'Producto 2', imagenURL: 'Comfatex\src\assets\img\bannerRecurso.png', price: 29.99, inventoryStatus: 'Out of Stock' },
 
    // Agrega más productos según sea necesario
  ];

  responsiveOptions: CarouselResponsiveOptions[] = [
    { breakpoint: '1024px', numVisible: 5, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 }
  ];

  getSeverity(inventoryStatus: string): string {
    switch (inventoryStatus) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }

  
}