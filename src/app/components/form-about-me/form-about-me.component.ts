import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Dato } from 'src/app/interface';

@Component({
  selector: 'app-form-about-me',
  templateUrl: './form-about-me.component.html',
  styleUrls: ['./form-about-me.component.css']
})
export class FormAboutMeComponent {
  @Input() Dato?:Dato;
  @Output() onEditDato:EventEmitter<Dato> = new EventEmitter();

  editar:boolean=false;
id:number=0;
urlFotoPerfil:string="";
titulo:string="";
sobreMi:string="";
nombreApellido?:string="";

desplegarEdicion(){
  this.editar = !this.editar;
  console.log(this.editar);
  }

onSubmit(){
  if (this.urlFotoPerfil.length === 0 && this.titulo.length === 0 && this.sobreMi.length === 0) {
    alert("Error no se ingreso ningun cambio!");
  }
  const newDato = { nombreApellido: this.nombreApellido, img : this.urlFotoPerfil, title: this.titulo, detail: this.sobreMi, id : this.Dato?.id };
  console.log(this.Dato);
  this.onEditDato.emit(newDato);
  
}
}
