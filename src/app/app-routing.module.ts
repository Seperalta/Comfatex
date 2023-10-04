import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './core/landing-page/landing-page.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DescripcionFajasComponent } from './descripcion-fajas/descripcion-fajas.component';
import { DescripcionInsumosComponent } from './descripcion-insumos/descripcion-insumos.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Ruta de inicio (landing page)
  { path: 'contacto', component: ContactoComponent }, // Ruta para el formulario de contacto
  { path: 'descripcion-fajas', component: DescripcionFajasComponent }, // Ruta para descripción de fajas
  { path: 'descripcion-insumos', component: DescripcionInsumosComponent }, // Ruta para descripción de insumos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
