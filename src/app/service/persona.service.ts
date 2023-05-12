import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {  Persona} from '../interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlApiHeader="http://localhost:8080";
 
  constructor( private http:HttpClient) { }

  
  getDato():Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlApiHeader+"/persona/ver");
  }

  eliminarRegistro(dato:Persona):Observable<Persona>{
    const url = `${this.urlApiHeader}/persona/eliminar/${dato.id}`;
    return this.http.delete<Persona>(url);
  }

  modifcarRegistro(dato:Persona,component:string): Observable<Persona> {
    const url = `${this.urlApiHeader}/persona/editar/${dato.id}`;
    const param = `?nombreApellido=${dato.nombreApellido}&edad=${dato.edad}&titulo=${dato.titulo}&direccion=${dato.direccion}&telefono=${dato.telefono}&sobreMi=${dato.sobreMi}&urlFotoPerfil=${dato.urlFotoPerfil}`;
    return this.http.put<Persona>(url+param, dato);
  }

  altaRegistro(dato: Persona): Observable<Persona> {
    const url = "http://localhost:8080/persona/agregar";
    return this.http.post<Persona>(url, dato);
  }
}
