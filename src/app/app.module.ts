import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../assets/ROUTES/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTES/NAVBAR/navbar/navbar.component';
import { HomeComponent } from './COMPONENTES/PAGES/INICIO/home/home.component';
import { ContactoComponent } from './COMPONENTES/PAGES/CONTACTO/contacto/contacto.component';
import { AcercaComponent } from './COMPONENTES/PAGES/ACERCA/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
