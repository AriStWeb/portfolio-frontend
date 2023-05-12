import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Banner} from '../interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private urlApiHeader="http://localhost:8080";
  

  constructor( private http:HttpClient) { }

  getDato():Observable<Banner[]> {
    return this.http.get<Banner[]>(this.urlApiHeader+"/banner/ver");
  }

  eliminarRegistro(Dato:Banner):Observable<Banner>{
    const url = "http://localhost:8080/banner/eliminar/"+`${Dato.id}`;
    return this.http.delete<Banner>(url);
  }

  modifcarRegistro(dato:Banner): Observable<Banner> {
    const url = `${this.urlApiHeader}/banner/editar/${dato.id}`;
    const param = `?tituloBanner=${dato.tituloBanner}&fraseBanner=${dato.fraseBanner}&urlImgBanner=${dato.urlImgBanner}`;
    return this.http.put<Banner>(url, dato);
  }

  altaRegistro(dato: Banner): Observable<Banner> {
    const url = "http://localhost:8080/banner/agregar";
    return this.http.post<Banner>(url, dato);
  }
}
