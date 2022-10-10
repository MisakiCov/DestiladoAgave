import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/COMPONENTES/PAGES/INICIO/home/home.component';
import { ContactoComponent } from 'src/app/COMPONENTES/PAGES/CONTACTO/contacto/contacto.component'
import { AcercaComponent } from 'src/app/COMPONENTES/PAGES/ACERCA/acerca/acerca.component'

const routes: Routes = [
  {path: 'Acerca', component: AcercaComponent},
  {path: 'Inicio', component: HomeComponent},
  {path: 'Contacto', component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,
    relativeLinkResolution: 'legacy' }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
