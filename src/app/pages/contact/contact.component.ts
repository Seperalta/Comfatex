import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  checkboxValue = false;
  

  contactForm = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
  });

  constructor() {
    // Inicializa el servicio de EmailJS con tu ID de usuario al iniciar el componente
    emailjs.init("7NQlwseVOlilT3urp");

  }

  btnBorrar(){
    this.contactForm.setValue({
      'nombres': '',
      'apellidos': '',
      'email':'',
      'pais':'',
      'telefono':'',
      'mensaje':'',
    })
  }


  submitForm() {
    if(this.contactForm.valid){
      const formData = this.contactForm.value;
    let templateParams = {
      from_name: formData.nombres + " " + formData.apellidos,
      email: formData.email,
      telefono: formData.telefono,
      pais: formData.pais,
      mensaje: formData.mensaje,
      reply_to: formData.email,
    };


    emailjs.send('service_mnzlnlj', 'template_si3e9mg', templateParams)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text);
      }, err => {
        console.log('FAILED...', err);
      });
  }else{
    console.log("error de formulario no valido")
  }

  this.contactForm.setValue({
    'nombres': '',
    'apellidos': '',
    'email':'',
    'pais':'',
    'telefono':'',
    'mensaje':'',
  })
    }

    
    
}
