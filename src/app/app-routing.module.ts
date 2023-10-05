import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { FajasComponent } from './pages/fajas/fajas.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch:'full'},
  {path: '', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'insumos', component: InsumosComponent},
  {path: 'fajas', component: FajasComponent},
  {path: 'contact', component: ContactComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
