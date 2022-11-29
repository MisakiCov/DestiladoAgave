import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductoService{

    url = 'http://localhost/Ejercicios/Ejercicio1/Conexion/';

    constructor(private http: HttpClient){}
    mostrarTodos(){
        return this.http.get(`${this.url}getall.php`);
    }

    Eliminar(sabor:string){
        return this.http.get(`${this.url}delete.php?sabor=${sabor}`);
    }

    AgregarProducto(Producto: string){
        return this.http.post(`${this.url}post.php`,JSON.stringify(Producto));
    }
}