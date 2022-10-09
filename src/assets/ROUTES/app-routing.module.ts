import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/COMPONENTES/PAGES/INICIO/home/home.component';
import { AboutComponent } from 'src/app/COMPONENTES/PAGES/ABOUT/about/about.component';

const routes: Routes = [
  {path:'Inicio', component:HomeComponent},
  {path:'Acerca', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,
    relativeLinkResolution: 'legacy' }), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
