import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/producto.service'

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  ProductoList: any[] = []
  constructor(private ProductoSvc: ProductoService) {
    this.ProductoSvc.getAll().subscribe((result:any)=>{
      this.ProductoList=result;
    })
  }

  ngOnInit(): void {
  }

}