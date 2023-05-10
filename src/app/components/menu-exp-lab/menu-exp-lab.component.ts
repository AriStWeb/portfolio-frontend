import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dato } from 'src/app/interface';

@Component({
  selector: 'app-menu-exp-lab',
  templateUrl: './menu-exp-lab.component.html',
  styleUrls: ['./menu-exp-lab.component.css']
})

export class MenuExpLabComponent {
  @Input() Dato?: Dato;
  @Output() edit: EventEmitter<Dato> = new EventEmitter();
  @Output() nvoDato: EventEmitter<Dato> = new EventEmitter();
  @Output() borrarDato: EventEmitter<Dato> = new EventEmitter();
  editar: boolean = false;
  agregar: boolean = false;


  desplegarEditar(): void {
    this.editar = !this.editar;
    console.log(this.Dato);
  }

  desplegarAgregar(): void {
    this.agregar = !this.agregar;
  }

  editarDato(editData: Dato) {
    this.edit.emit(editData);
  }

  agregarDato(nvo: Dato) {
    this.nvoDato.emit(nvo);
    console.log(nvo);
  }

  eliminarDato() {
    this.borrarDato.emit(this.Dato);
  }
}