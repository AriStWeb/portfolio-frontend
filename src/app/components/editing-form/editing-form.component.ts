import { Component, Output, EventEmitter} from '@angular/core';
import { Dato } from 'src/app/interface';


@Component({
  selector: 'app-editing-form',
  templateUrl: './editing-form.component.html',
  styleUrls: ['./editing-form.component.css']
})
export class EditingFormComponent {
  @Output() onEditDato:EventEmitter<Dato> = new EventEmitter();
img:string="";
title:string="";
detail:string="";

onSubmit(){
  if (this.img.length === 0 && this.title.length === 0 && this.detail.length === 0) {
    alert("Error no se ingreso ningun cambio!");
  }
  const { img, title, detail } = this
  const newDato = { img, title, detail }
  this.onEditDato.emit(newDato);
}
}
