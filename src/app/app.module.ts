import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DescripcionFajasComponent } from './descripcion-fajas/descripcion-fajas.component';
import { DescripcionInsumosComponent } from './descripcion-insumos/descripcion-insumos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    DescripcionFajasComponent,
    DescripcionInsumosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
