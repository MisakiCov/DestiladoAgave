import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/service/producto.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ProductoList: any[] = [];
  constructor(private ProductoSvc: ProductoService) {
    this.ProductoSvc.getAll().subscribe((result:any)=>{
      this.ProductoList = result;
    })
   }

  ngOnInit(): void {
  }

}
