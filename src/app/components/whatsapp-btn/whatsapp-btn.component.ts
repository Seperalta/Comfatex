import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent {
  redirectToWhatsApp() {
    window.location.href = 'https://wa.me/+573118521183'; // Reemplaza con tu enlace de WhatsApp
  }
}
