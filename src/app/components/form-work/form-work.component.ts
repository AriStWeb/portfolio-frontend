import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dato } from 'src/app/interface';

@Component({
  selector: 'app-form-work',
  templateUrl: './form-work.component.html',
  styleUrls: ['./form-work.component.css']
})
export class FormWorkComponent {
  @Input() Dato?: Dato;
  @Output() anDato: EventEmitter<Dato> = new EventEmitter();
  id: number = 0;
  urlImgExpLab: string = "";
  nombreExpLab: string = "";
  detalleExpLab: string = "";

  onSubmit() {
    if (this.urlImgExpLab.length === 0 && this.nombreExpLab.length === 0 && this.detalleExpLab.length === 0) {
      alert("Error no se ingreso ningun cambio!");
    }
    const newDato = { img: this.urlImgExpLab,
       title: this.nombreExpLab,
        detail: this.detalleExpLab,
         id: this.Dato?.id};
    console.log(this.Dato);
    this.anDato.emit(newDato);
  }
}
