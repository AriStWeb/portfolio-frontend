import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ExperienciaLaboral } from 'src/app/interface';

@Component({
  selector: 'app-form-work',
  templateUrl: './form-work.component.html',
  styleUrls: ['./form-work.component.css']
})
export class FormWorkComponent {
  @Input() Dato: ExperienciaLaboral={id : 0,
                                    nombreExpLab : "",
                                    descripcionExpLab : "",
                                    anioInicioExpLab :  0,
                                    anioFinExpLab : 0,
                                    nombreLugarExpLab : "",
                                    imgExpLab : ""
                                    };
  @Output() anDato: EventEmitter<ExperienciaLaboral> = new EventEmitter();
  id: number = 0;
  imgExpLab: string = "";
  nombreExpLab: string = "";
  descripcionExpLab: string = "";
  anioInicioExpLab : number= 0;
  anioFinExpLab : number= 0;
  nombreLugarExpLab : string="";

  onSubmit() {
    if (this.imgExpLab.length === 0 || this.nombreExpLab.length === 0 || this.descripcionExpLab.length === 0) {
      alert("Error no se ingreso ningun cambio!");
    }
    const newDato:ExperienciaLaboral = {  imgExpLab: this.imgExpLab,
                                          nombreExpLab: this.nombreExpLab,
                                          descripcionExpLab: this.descripcionExpLab,
                                          id: this.Dato.id,
                                          anioInicioExpLab : this.anioInicioExpLab,
                                          anioFinExpLab : this.anioFinExpLab,
                                          nombreLugarExpLab :this.nombreLugarExpLab,

                                        };
      this.anDato.emit(newDato);
  }
}
