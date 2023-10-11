import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent {

  private whatsappLink: string = 'https://wa.me/+573118521183'; 
  
  redirectToWhatsApp() {
    window.open(this.whatsappLink, '_blank');
  }
}
