import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { datoBase } from '../bd'
import { Dato, DB} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoserviceService {
  private urlApiHeader="http://localhost:5001/header";
  

  constructor( private http:HttpClient) { }

  getDato():Observable<Dato[]> {
    return this.http.get<Dato[]>(this.urlApiHeader);
  }

  eliminarRegistro(Dato:Dato):Observable<Dato>{
    const url = `${this.urlApiHeader}/${Dato.id}`;
    console.log(url);
    return this.http.delete<Dato>(url);
  }

  modifcarRegistro(dato:Dato): Observable<Dato> {
    const url = `${this.urlApiHeader}/${dato.id}`
    return this.http.put<Dato>(url, dato);
  }

  altaRegistro(dato: Dato): Observable<Dato> {
    return this.http.post<Dato>(this.urlApiHeader, dato);
  }
}
