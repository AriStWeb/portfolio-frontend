import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/interface';

@Component({
  selector: 'app-menu-exp-lab',
  templateUrl: './menu-exp-lab.component.html',
  styleUrls: ['./menu-exp-lab.component.css']
})

export class MenuExpLabComponent {
  @Input() Dato: ExperienciaLaboral={ id : 0,
                                      nombreExpLab : "",
                                      descripcionExpLab : "",
                                      anioInicioExpLab :  0,
                                      anioFinExpLab : 0,
                                      nombreLugarExpLab : "",
                                      imgExpLab : ""
                                      };
  @Output() edit: EventEmitter<ExperienciaLaboral> = new EventEmitter();
  @Output() nvoDato: EventEmitter<ExperienciaLaboral> = new EventEmitter();
  @Output() borrarDato: EventEmitter<ExperienciaLaboral> = new EventEmitter();
  editar: boolean = false;
  agregar: boolean = false;


  desplegarEditar(): void {
    this.editar = !this.editar;
    console.log(this.Dato);
  }

  desplegarAgregar(): void {
    this.agregar = !this.agregar;
  }

  editarDato(editData: ExperienciaLaboral) {
    this.edit.emit(editData);
  }

  agregarDato(nvo: ExperienciaLaboral) {
    this.nvoDato.emit(nvo);
    console.log(nvo);
  }

  eliminarDato() {
    this.borrarDato.emit(this.Dato);
  }
}