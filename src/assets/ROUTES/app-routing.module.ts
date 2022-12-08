import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/COMPONENTES/PAGES/INICIO/home/home.component';
import { ContactoComponent } from 'src/app/COMPONENTES/PAGES/CONTACTO/contacto/contacto.component'
import { AcercaComponent } from 'src/app/COMPONENTES/PAGES/ACERCA/acerca/acerca.component'

const routes: Routes = [
  {path: 'Acerca', component: AcercaComponent}, 
  // Hacer que la direccion "Acerca" redirija a AcercaComponent
  {path: 'Inicio', component: HomeComponent},
  // Hacer que la direccion "Inicio" redirika a HomeComponent
  {path: 'Contacto', component: ContactoComponent},
  // Hacer que la direccion "Contacto" redirija a ContactoComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,
    relativeLinkResolution: 'legacy' }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
