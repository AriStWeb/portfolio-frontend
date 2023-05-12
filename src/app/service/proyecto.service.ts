import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Proyecto} from '../interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlApiProyecto="http://localhost:8080";
 

  constructor( private http:HttpClient) { }

 
  getDato():Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.urlApiProyecto+"/proyecto/ver");
  }

  eliminarRegistro(Dato:Proyecto):Observable<Proyecto>{
    const url = `${this.urlApiProyecto}/eliminar/proyecto/${Dato.id}`;
    return this.http.delete<Proyecto>(url);
  }

  modifcarRegistro(dato:Proyecto): Observable<Proyecto> {
    const url = `${this.urlApiProyecto}/proyecto/editar/${dato.id}`
    return this.http.put<Proyecto>(url, dato);
  }

  altaRegistro(dato: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.urlApiProyecto+"/proyecto/agregar", dato);
  }
}
