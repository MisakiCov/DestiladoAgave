import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const URL = 'assets/data/contacto.json';

@Injectable({
    providedIn: 'root'
})

export class ContactoService{
    constructor(private http: HttpClient){}
    getAll(){
        return this.http.get(URL)
    }
}