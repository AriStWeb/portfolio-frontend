import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Dato, DB} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoserviceService {
  private urlApiHeader="http://localhost:5001/header";
  private urlApi= [{
    id:"header",
    url:"http://localhost:5001/header"
  },
  {
    id:"aboutMe",
    url:"http://localhost:5001/aboutMe"
  },
  {
    id:"works",
    url:"http://localhost:5001/works"
  },
  {
    id:"education",
    url:"http://localhost:5001/education"
  },
  {
    id:"skill",
    url:"http://localhost:5001/skill"
  },
  {
    id:"project",
    url:"http://localhost:5001/projec"
  },
  {
    id:"footer",
    url:"http://localhost:5001/footer"
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
    return this.http.get<Dato[]>(this.urlApiComponent(component));
  }

  eliminarRegistro(Dato:Dato,component:string):Observable<Dato>{
    const url = `${this.urlApiComponent(component)}/${Dato.id}`;
    return this.http.delete<Dato>(url);
  }

  modifcarRegistro(dato:Dato,component:string): Observable<Dato> {
    const url = `${this.urlApiComponent(component)}/${dato.id}`
    return this.http.put<Dato>(url, dato);
  }

  altaRegistro(dato: Dato,component:string): Observable<Dato> {
    return this.http.post<Dato>(this.urlApiComponent(component), dato);
  }
}
