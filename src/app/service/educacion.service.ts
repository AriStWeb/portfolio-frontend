import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Educacion} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private urlApiEducacion="http://localhost:8080";
 
  constructor( private http:HttpClient) { }

 
  getDato():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.urlApiEducacion+"/educacion/ver");
  }

  eliminarRegistro(Dato:Educacion):Observable<Educacion>{
    console.log(Dato.id);
    const url = "http://localhost:8080/educacion/eliminar/"+`${Dato.id}`;
    return this.http.delete<Educacion>(url);
  }

  modifcarRegistro(dato:Educacion ): Observable<Educacion> {
    const url = "http://localhost:8080/educacion/editar/"+`${dato.id}`;
    const param = `?nombre_educ=${dato.nombre_educ}&descripcionEduc=${dato.descripcionEduc}&anioInicioEduc=${dato.anioInicioEduc}&anioFinEduc=${dato.anioFinEduc}&nombreOrgEduc=${dato.nombreOrgEduc}&imgEduc=${dato.imgEduc}`;
    return this.http.put<Educacion>(url+param, dato);
  }

  altaRegistro(dato: Educacion): Observable<Educacion> {
    const url = "http://localhost:8080/educacion/agregar";
    return this.http.post<Educacion>(url, dato);
   }
}
