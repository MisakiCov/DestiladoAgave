import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ContactoService{

    url = 'http://localhost/ejercicios/Ejercicio1/Conexion/ConexionContacto/';

    constructor(private http: HttpClient){}
    mostrarTodosContacto(){
        return this.http.get(`${this.url}getallcontactos.php`);
    }

    EliminarContacto(telefono: string){
        return this.http.get(`${this.url}deleteContactos.php?telefono=${telefono}`);
    }

    AgregarContactos(Contact: string){
        return this.http.post(`${this.url}postContactos.php`, JSON.stringify(Contact));
    }

    
}