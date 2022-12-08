import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductoService{

    url = 'http://localhost/Ejercicios/Ejercicio1/Conexion/';
    // Instanciar url con la direccion especifica del localhost establecida por XAMPP

    constructor(private http: HttpClient){}
    mostrarTodos(){ //Funcion para mostrar los valores de la tabla productos
        return this.http.get(`${this.url}getall.php`);
        // Llamar a la funcion get obteniendo el arvhivo getall.php de la ruta de XAMPP
    }

    Eliminar(sabor:string){ //Función para eliminar valores de la tabla productos
        return this.http.get(`${this.url}delete.php?sabor=${sabor}`);
        // Llamar a la funcion delete obteniendo el archivo delete.php de la ruta de XAMPP
    }

    AgregarProducto(Producto: string){ //Función para agregar valores de la tabla productos
        return this.http.post(`${this.url}post.php`,JSON.stringify(Producto));
        // Llamar a la funcion post obteniendo el archivo post.php de la ruta de XAMPP
    }
}