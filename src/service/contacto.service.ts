import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ContactoService{

    url = 'http://localhost/ejercicios/Ejercicio1/Conexion/ConexionContacto/';
    // Instanciar url con la direccion especifica del localhost establecida por XAMPP

    constructor(private http: HttpClient){}
    mostrarTodosContacto(){ //Función para mostrar los valores de la tabla contacto
        return this.http.get(`${this.url}getallcontactos.php`); 
        //obtener el archivo getallcontactos.php de la ruta de XAMPP
    }

    EliminarContacto(telefono: any){ //Función para eliminar valores de la tabla contacto
        return this.http.delete(`${this.url}deleteContactos.php/telefono=${telefono}`);
        //Llamar a la funcion delete obteniendo el archivo deleteContactos.php de la ruta de XAMPP
    }

    AgregarContactos(Contact: string){ //Función para agregar valores de la tabla contacto
        return this.http.post(`${this.url}postContactos.php`, JSON.stringify(Contact));
        //Llamar a la función post obteniendo el archivo postContactos.php de la ruta de XAMPP
    }
}