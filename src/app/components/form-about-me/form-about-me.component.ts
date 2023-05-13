import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Dato, Persona } from 'src/app/interface';

@Component({
  selector: 'app-form-about-me',
  templateUrl: './form-about-me.component.html',
  styleUrls: ['./form-about-me.component.css']
})
export class FormAboutMeComponent {
  @Output() onEditDato:EventEmitter<Persona> = new EventEmitter();
  @Input() Dato:Persona={ id:0,
                        urlFotoPerfil:"",
                        titulo:"",
                        edad:"",
                        sobreMi:"",
                        nombreApellido:"",
                        telefono:"",
                        direccion:""
                      };

  editar:boolean=false;

  id=0;
  urlFotoPerfil="";
  titulo="";
  edad="";
  sobreMi="";
  nombreApellido="";
  telefono="";
  direccion="";

desplegarEdicion(){
  this.editar = !this.editar;
  console.log(this.editar);
  }

onSubmit(){
  if (this.urlFotoPerfil.length === 0 || this.titulo.length === 0 || this.sobreMi.length === 0) {
    alert("por favor complete los campos obligatorios marcados con*!");
  }
  else{
    const newDato:Persona = 
    {   id : this.Dato.id,
        nombreApellido: this.nombreApellido,
        urlFotoPerfil : this.urlFotoPerfil, 
        titulo: this.titulo,
        sobreMi: this.sobreMi,
        direccion: this.direccion,
        telefono: this.telefono,
        edad: this.edad
        };
      this.onEditDato.emit(newDato);
    }
   }

}
