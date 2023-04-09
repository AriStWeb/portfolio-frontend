import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-btn-eliminar',
  templateUrl: './btn-eliminar.component.html',
  styleUrls: ['./btn-eliminar.component.css']
})
export class BtnEliminarComponent {
  @Output() eliminadorDeRegistro:EventEmitter<Dato> = new EventEmitter(); 
  @Input() Dato:any;

  constructor(){

  }
eliminarRegistro(Dato:Dato){
  Dato =this.Dato;
  this.eliminadorDeRegistro.emit(Dato);
}
 
}
