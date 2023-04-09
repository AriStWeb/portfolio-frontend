import { Injectable } from '@angular/core';
import { datoBase } from '../bd'
import { Dato, DB} from '../interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatoserviceService {
  Datos:DB =datoBase;

  constructor() { }

  getDato():Observable<Dato[]>{
    const datoHeader = of( this.Datos.header);
    return datoHeader;
  }
}
