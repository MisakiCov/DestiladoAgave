import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/service/contacto.service'

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  ContactoList: any[] = []
  constructor(private ContactoSvc: ContactoService) {
    this.ContactoSvc.getAll().subscribe((result:any)=>{
      this.ContactoList=result;
    })
  }

  ngOnInit(): void {
  }

}