import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Dato } from 'src/app/interface';


@Component({
  selector: 'app-editing-form',
  templateUrl: './editing-form.component.html',
  styleUrls: ['./editing-form.component.css']
})
export class EditingFormComponent {
  @Input() Dato?:Dato;
  @Output() onEditDato:EventEmitter<Dato> = new EventEmitter();
id:number=0;
img:string="";
title:string="";
detail:string="";

onSubmit(){
  if (this.img.length === 0 && this.title.length === 0 && this.detail.length === 0) {
    alert("Error no se ingreso ningun cambio!");
  }
  const newDato = { img : this.img, title: this.title, detail: this.detail, id : this.Dato?.id };
  this.onEditDato.emit(newDato);
  
}
}
