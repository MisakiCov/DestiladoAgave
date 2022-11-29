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

  productForm = new FormGroup({
    sabor: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl('')
  });
  constructor(private ProductoSvc: ProductoService) {
  }

  ngOnInit(): void {
    this.MostrarTodos();
  }

  MostrarTodos(){
    this.ProductoSvc.mostrarTodos().subscribe((result: any) => this.ProductoList = result);
    console.log(this.ProductoList);
  }

  AgregarProductos(): void {
    this.ProductoSvc.AgregarProducto(this.productForm.value).subscribe(() => {
      this.MostrarTodos();
      this.productForm.reset();
    })
  }
}