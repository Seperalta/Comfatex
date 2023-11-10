import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
  });

  constructor() {
    // Inicializa el servicio de EmailJS con tu ID de usuario al iniciar el componente
    emailjs.init("7NQlwseVOlilT3urpDemas");
  }

  btnBorrar(){
    this.contactForm.setValue({
      'nombres': '',
      'apellidos': '',
      'email':'',
      'pais':'',
      'telefono':'',
      'mensaje':''
    })
  }

  submitForm() {
    if(this.contactForm.valid){
      const formData = this.contactForm.value;
    
    // Define aquí los parámetros según tu plantilla de EmailJS
    let templateParams = {
      from_name: formData.nombres + " " + formData.apellidos,
      email: formData.email,
      telefono: formData.telefono,
      pais: formData.pais,
      mensaje: formData.mensaje,
      reply_to: formData.email,
      
      // ... puedes agregar todos los campos que necesites
    };


    emailjs.send('service_mnzlnlj', 'template_si3e9mg', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      }, err => {
        console.log('FAILED...', err);
      });
  }else{
    console.log("Se ha presentado un error consulte con el administrador.")
  }
    }
    
}
