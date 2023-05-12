import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Educacion } from 'src/app/interface';


@Component({
  selector: 'app-editing-form',
  templateUrl: './editing-form.component.html',
  styleUrls: ['./editing-form.component.css']
})
export class EditingFormComponent {
  @Input() Dato:Educacion={ id: 0,
    nombre_educ: "",
    descripcionEduc: "",
    anioInicioEduc: 0,
    anioFinEduc:0,
    nombreOrgEduc: "",
    imgEduc: ""
  };

  @Output() onEditDato:EventEmitter<Educacion> = new EventEmitter();
id:number=0;
imgEduc:string="";
nombre_educ:string="";
descripcionEduc:string="";
anioInicioEduc: number=0;
anioFinEduc:number=0;
nombreOrgEduc: string="";

onSubmit(){
  if (this.imgEduc.length === 0 || this.nombre_educ.length === 0 || this.descripcionEduc.length === 0) {
    alert("¡completa los camposoblifatorios!");
  }
  const newDato:Educacion = { id : this.Dato.id,
    imgEduc: this.imgEduc,
    nombre_educ: this.nombre_educ,
    descripcionEduc: this.descripcionEduc,
    anioInicioEduc:this.anioInicioEduc,
    anioFinEduc: this.anioFinEduc,
    nombreOrgEduc:this.nombreOrgEduc
       };
  console.log(this.Dato);
  this.onEditDato.emit(newDato);
}
}
