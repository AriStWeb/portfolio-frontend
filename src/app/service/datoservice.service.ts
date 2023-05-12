import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Dato, DB} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoserviceService {
  private urlApiHeader="http://localhost:8080";
  private urlApi= [
  {
    id:"proyecto",
    url:"http://localhost:8080/proyecto"
  }
]

  constructor( private http:HttpClient) { }

  urlApiComponent(dato:string):any{
    for(let elemento of this.urlApi){
      if(elemento.id === dato)
      return elemento.url;
    }
  }
  getDato(component:string):Observable<Dato[]> {
    return this.http.get<Dato[]>(this.urlApiHeader+"/"+component+"/ver");
  }

  eliminarRegistro(Dato:Dato,component:string):Observable<Dato>{
    const url = `${this.urlApiComponent(component)}/"eliminar"/${Dato.id}`;
    return this.http.delete<Dato>(url);
  }

  modifcarRegistro(dato:Dato,component:string): Observable<Dato> {
    const url = `${this.urlApiComponent(component)}/"editar"/${dato.id}`
    return this.http.put<Dato>(url, dato);
  }

  altaRegistro(dato: Dato,component:string): Observable<Dato> {
    return this.http.post<Dato>(this.urlApiComponent(component)+"/agregar", dato);
  }
}
