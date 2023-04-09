import { Component,Input, Output, EventEmitter} from '@angular/core';
import { Dato } from 'src/app/interface';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './btn-editar.component.html',
  styleUrls: ['./btn-editar.component.css']
})
export class BtnEditarComponent {
  @Input() Dato?:Dato;
  @Output() onNewDato:EventEmitter<Dato> = new EventEmitter();
  activarEditarDato:boolean=false;
  
  
  editarBanner(){
  this.activarEditarDato = !this.activarEditarDato;
  console.log(this.activarEditarDato);
  }
  
  editarDato(newDato:Dato){
    this.onNewDato.emit(newDato);
    }
}
