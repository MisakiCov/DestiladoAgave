import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

const URL = 'assets/data/productos.json';

@Injectable({
    providedIn: 'root'
})

export class ProductoService{
    constructor(private http: HttpClient){}
    getAll(){
        return this.http.get(URL)
    }
}