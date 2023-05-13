import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { ExperienciaLaboral} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private urlApiExperiencia="http://localhost:8080";

  constructor( private http:HttpClient) { }

 
  getDato():Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(this.urlApiExperiencia+"/experienciaLaboral/ver");
  }

  eliminarRegistro(dato:ExperienciaLaboral):Observable<ExperienciaLaboral>{
    const url = "http://localhost:8080/experienciaLaboral/eliminar/"+`${dato.id}`;
    return this.http.delete<ExperienciaLaboral>(url);
  }

  modifcarRegistro(dato:ExperienciaLaboral): Observable<ExperienciaLaboral> {
    const url = "http://localhost:8080/experiencia/editar/"+`${dato.id}`;
    const param =`?nombreExpLab=${dato.nombreExpLab}&descripcionExpLab=${dato.descripcionExpLab}&anioInicioExpLab=${dato.anioInicioExpLab}&anioFinExpLab=${dato.anioFinExpLab}&nombreLugarExpLab=${dato.nombreLugarExpLab}&imgExpLab=${dato.imgExpLab}`;
    return this.http.put<ExperienciaLaboral>(url+param, dato);
  }

  altaRegistro(dato: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    const url = "http://localhost:8080/experienciaLaboral/agregar";
    return this.http.post<ExperienciaLaboral>(url, dato);
  }
}
