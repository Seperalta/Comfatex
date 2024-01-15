import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FajasComponent } from './pages/fajas/fajas.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag'
import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        ContactComponent,
        FajasComponent,
        InsumosComponent,
        WhatsappBtnComponent,
        FooterComponent,
        HeaderComponent,
        CarruselComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        CarouselModule,
        TagModule,
        ButtonModule,
    ]
})
export class AppModule { }
