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

  //Creacion de la estructura del formulario para la adicion de datos
  contactForm = new FormGroup({
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl('')
  });

  constructor(private ContactoSvc: ContactoService) {
  }

  ngOnInit(): void {
    this.mostrarTodosContacto(); //Llamar a la funcion MostrarTodosContacto()
  }

  //Función para mostrar los datos de la tabla "contacto" de la base de datos
  mostrarTodosContacto(){
    this.ContactoSvc.mostrarTodosContacto().subscribe((result: any) => this.ContactoList = result);
    //Llamar a la función mostrarTodosContacto() de contacto.service.ts y agregarlo a ContactoList
  }

  //Función para eliminar datos de la tabla tomando como referencia un valor.
  Eliminar(telefono:any):void{
      console.log(telefono); //Mostrar en consola el valor al que se hace referencia
      this.ContactoSvc.EliminarContacto(telefono).subscribe(()=>{
        //Llamar a la funcion ELiminarContacto y pasar como parametro el valor de referencia
      this.mostrarTodosContacto();
      //Llamar a la función mostrarTodosContacto() para actualizar la tabla de datos.
    })
  }

  //Funcion para agregar datos en la tabla "contacto" de la base de datos
  Agregar(): void {
    //Llamar a la función AgregarContactos() tomando los valores de contactForm
    this.ContactoSvc.AgregarContactos(this.contactForm.value).subscribe(() => {
      this.mostrarTodosContacto();
      //Llamar a la función mostrarTodosContacto() para actualizar con los nuevos valores agregados
      this.contactForm.reset('');
      //Resetear el contactForm para que los datos escritos en el formulario no se mantengan escritos
    })
  }
}