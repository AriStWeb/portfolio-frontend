import { Component,Output,EventEmitter } from '@angular/core';
import { Educacion} from 'src/app/interface';

@Component({
  selector: 'app-btn-agregar',
  templateUrl: './btn-agregar.component.html',
  styleUrls: ['./btn-agregar.component.css']
})
export class BtnAgregarComponent {
  activarAgregarDato:boolean=false;
  @Output() nuevoDato:EventEmitter<Educacion> = new EventEmitter();


abrirVentana(){
  this.activarAgregarDato = !this.activarAgregarDato;
}

editarDato(newDato:Educacion){
  this.nuevoDato.emit(newDato);
}
}
