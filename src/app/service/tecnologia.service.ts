import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tecnologia} from '../interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private urlApiTecnologia="https://portfolio-backend-final-1pe1.onrender.com";
  
  constructor( private http:HttpClient) { }

  
  getDato(component:string):Observable<Tecnologia[]> {
    return this.http.get<Tecnologia[]>(this.urlApiTecnologia+"//tecnologia/ver");
  }

  eliminarRegistro(Dato:Tecnologia):Observable<Tecnologia>{
    const url = `${this.urlApiTecnologia}//tecnologia/eliminar/${Dato.id}`;
    return this.http.delete<Tecnologia>(url);
  }

  modifcarRegistro(dato:Tecnologia): Observable<Tecnologia> {
    const url = `${this.urlApiTecnologia}//tecnologia/editar/${dato.id}`
    return this.http.put<Tecnologia>(url, dato);
  }

  altaRegistro(dato: Tecnologia): Observable<Tecnologia> {
    return this.http.post<Tecnologia>(this.urlApiTecnologia+"//tecnologia/agregar", dato);
  }
}
