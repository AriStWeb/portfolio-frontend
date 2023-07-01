import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Educacion} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private urlApiEducacion="https://portfolio-backend-final-1pe1.onrender.com";
 
  constructor( private http:HttpClient) { }

 
  getDato():Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.urlApiEducacion+"/educacion/ver");
  }

  eliminarRegistro(Dato:Educacion):Observable<Educacion>{
    console.log(Dato.id);
    const url = "https://portfolio-backend-final-1pe1.onrender.com//educacion/eliminar/"+`${Dato.id}`;
    return this.http.delete<Educacion>(url);
  }

  modifcarRegistro(dato:Educacion ): Observable<Educacion> {
    const url = "https://portfolio-backend-final-1pe1.onrender.com//educacion/editar/"+`${dato.id}`;
    const param = `?&nombre_educ=${dato.nombre_educ}&descripcionEduc=${dato.descripcionEduc}&anioInicioEduc=${dato.anioInicioEduc}&anioFinEduc=${dato.anioFinEduc}&nombreOrgEduc=${dato.nombreOrgEduc}&imgEduc=${dato.imgEduc}`;
    return this.http.put<Educacion>(url+param, dato);
  }

  altaRegistro(dato: Educacion): Observable<Educacion> {
    const url = "https://portfolio-backend-final-1pe1.onrender.com//educacion/agregar";
    return this.http.post<Educacion>(url, dato);
   }
}
