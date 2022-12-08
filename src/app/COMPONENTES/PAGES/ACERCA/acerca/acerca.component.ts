import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms'
import { ProductoService } from 'src/service/producto.service'

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})

export class AcercaComponent implements OnInit {

  ProductoList= null; 

  //Creacion de la estructura del formulario para la adicion de datos
  productForm = new FormGroup({
    sabor: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl('')
  });

  constructor(private ProductoSvc: ProductoService) {
  }

  ngOnInit(): void {
    this.MostrarTodos(); //Llamar a la funcion MostrarTodos()
  }

  //Función para mostrar los datos de la tabla "productos" de la base de datos
  MostrarTodos(){
    this.ProductoSvc.mostrarTodos().subscribe((result: any) => this.ProductoList = result);
    //Llamar a la función mostrarTodos() de producto.service.ts y agregarlo a ProductoList.
  }

  //Función para agregar datos en la tabla "productos" de la base de datos
  AgregarProductos(): void {
    //Llamar a la función AgregarProducto tomando los valores de productForm
    this.ProductoSvc.AgregarProducto(this.productForm.value).subscribe(() => {
      this.MostrarTodos();
      //Llamar a la función MostrarTodos() para actualizar con los nuevos valores agregados
      this.productForm.reset();
      //Resetear el productForm para que los datos escritos en el formulario no se mantengan escritos
    })
  }
}