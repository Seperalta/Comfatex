import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FajasComponent } from './pages/fajas/fajas.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        CardsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        
    ]
})
export class AppModule { }
