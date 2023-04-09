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
}
