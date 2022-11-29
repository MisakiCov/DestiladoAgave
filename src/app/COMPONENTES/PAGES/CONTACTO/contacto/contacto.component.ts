import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/service/contacto.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  ContactoList = null;

  contactForm = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl('')
  });
  constructor(private ContactoSvc: ContactoService) {
  }

  ngOnInit(): void {
    this.mostrarTodosContacto();
    this.Agregar();
  }

  mostrarTodosContacto(){
    this.ContactoSvc.mostrarTodosContacto().subscribe((result: any) => this.ContactoList = result);
    console.log(this.ContactoList);
  }

  Agregar(): void {
    this.ContactoSvc.AgregarContactos(this.contactForm.value).subscribe(() => {
      this.mostrarTodosContacto();
      this.contactForm.reset();
    })
  }
}