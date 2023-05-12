import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Educacion } from 'src/app/interface';


@Component({
  selector: 'app-btn-eliminar',
  templateUrl: './btn-eliminar.component.html',
  styleUrls: ['./btn-eliminar.component.css']
})
export class BtnEliminarComponent {
  @Output() eliminadorDeRegistro:EventEmitter<Educacion> = new EventEmitter(); 
  @Input() Dato:Educacion={ id: 0,
                            nombre_educ: "",
                            descripcionEduc: "",
                            anioInicioEduc: 0,
                            anioFinEduc:0,
                            nombreOrgEduc: "",
                            imgEduc: ""
                          };

  constructor(){

  }
eliminarRegistro(Dato:Educacion){
  Dato =this.Dato;
  this.eliminadorDeRegistro.emit(Dato);
}
 
}
