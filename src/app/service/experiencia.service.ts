import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { ExperienciaLaboral} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private urlApiExperiencia="https://portfolio-backend-final-1pe1.onrender.com";

  constructor( private http:HttpClient) { }

 
  getDato():Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(this.urlApiExperiencia+"/experienciaLaboral/ver");
  }

  eliminarRegistro(dato:ExperienciaLaboral):Observable<ExperienciaLaboral>{
    const url = "https://portfolio-backend-final-1pe1.onrender.com//experienciaLaboral/eliminar/"+`${dato.id}`;
    return this.http.delete<ExperienciaLaboral>(url);
  }

  modifcarRegistro(dato:ExperienciaLaboral): Observable<ExperienciaLaboral> {
    const url = "https://portfolio-backend-final-1pe1.onrender.com//experiencia/editar/"+`${dato.id}`;
    const param =`?&nombreExpLab=${dato.nombreExpLab}&descripcionExpLab=${dato.descripcionExpLab}&anioInicioExpLab=${dato.anioInicioExpLab}&anioFinExpLab=${dato.anioFinExpLab}&nombreLugarExpLab=${dato.nombreLugarExpLab}&imgExpLab=${dato.imgExpLab}`;
    return this.http.put<ExperienciaLaboral>(url+param, dato);
  }

  altaRegistro(dato: ExperienciaLaboral): Observable<ExperienciaLaboral> {
    const url = "https://portfolio-backend-final-1pe1.onrender.com//experienciaLaboral/agregar";
    return this.http.post<ExperienciaLaboral>(url, dato);
  }
}
