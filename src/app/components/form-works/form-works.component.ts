import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Dato } from 'src/app/interface';

@Component({
  selector: 'app-form-works',
  templateUrl: './form-works.component.html',
  styleUrls: ['./form-works.component.css']
})
export class FormWorksComponent {
  @Input() Dato?:Dato;
  @Output() onEditDato:EventEmitter<Dato> = new EventEmitter();
id:number=0;
urlImgExpLab:string="";
nombreExpLab:string="";
descripcionExpLab:string="";

onSubmit(){
  if (this.urlImgExpLab.length === 0 && this.nombreExpLab.length === 0 && this.descripcionExpLab.length === 0) {
    alert("Error no se ingreso ningun cambio!");
  }
  const newDato = { img : this.urlImgExpLab, title: this.nombreExpLab, detail: this.descripcionExpLab, id : this.Dato?.id };
  console.log(this.Dato);
  this.onEditDato.emit(newDato);
  
}
}
