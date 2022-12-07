import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/service/contacto.service';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent{

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
  }

  mostrarTodosContacto(){
    this.ContactoSvc.mostrarTodosContacto().subscribe((result: any) => this.ContactoList = result);
    console.log(this.ContactoList);
  }

  Eliminar(telefono:any):void{
      console.log(telefono);
      this.ContactoSvc.EliminarContacto(telefono).subscribe(()=>{
      this.mostrarTodosContacto();
    })
  }

  Agregar(): void {
    this.ContactoSvc.AgregarContactos(this.contactForm.value).subscribe(() => {
      this.mostrarTodosContacto();
      this.contactForm.reset('');
    })
  }
}