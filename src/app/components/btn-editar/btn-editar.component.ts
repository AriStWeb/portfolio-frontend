import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dato, Educacion } from 'src/app/interface';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './btn-editar.component.html',
  styleUrls: ['./btn-editar.component.css']
})
export class BtnEditarComponent {
  @Input() Dato: Educacion= { id: 0,
                              nombre_educ: "",
                              descripcionEduc: "",
                              anioInicioEduc: 0,
                              anioFinEduc:0,
                              nombreOrgEduc: "",
                              imgEduc: ""
                            };
  @Output() onNewDato: EventEmitter<Educacion> = new EventEmitter();
  activarEditarDato: boolean = false;


  editarBanner() {
    this.activarEditarDato = !this.activarEditarDato;
    console.log(this.activarEditarDato);
  }

  editarDato(newDato: Educacion) {
    this.onNewDato.emit(newDato);
    console.log(newDato);
  }
}
