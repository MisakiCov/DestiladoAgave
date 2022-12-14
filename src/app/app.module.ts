import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from '../assets/routes/app-routing.module';
import { HttpClientModule } from "@angular/common/http"
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
    AcercaComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
