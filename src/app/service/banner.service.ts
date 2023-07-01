import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Banner} from '../interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  private urlApiHeader="https://portfolio-backend-final-1pe1.onrender.com";
  

  constructor( private http:HttpClient) { }

  getDato():Observable<Banner[]> {
    return this.http.get<Banner[]>(this.urlApiHeader+"/banner/ver");
  }

  eliminarRegistro(Dato:Banner):Observable<Banner>{
    const url = "https://portfolio-backend-final-1pe1.onrender.com/banner/eliminar/"+`${Dato.id}`;
    return this.http.delete<Banner>(url);
  }

  modifcarRegistro(dato:Banner): Observable<Banner> {
    const url = `${this.urlApiHeader}/banner/editar/${dato.id}`;
    const param = `?&tituloBanner=${dato.tituloBanner}&fraseBanner=${dato.fraseBanner}&urlImgBanner=${dato.urlImgBanner}`;
    return this.http.put<Banner>(url+param, dato);
  }
  altaRegistro(dato: Banner): Observable<Banner> {
    const url = "https://portfolio-backend-final-1pe1.onrender.com/banner/agregar";
    return this.http.post<Banner>(url, dato);
  }
}
