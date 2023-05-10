import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dato } from 'src/app/interface';


@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent {

  @Input() Dato?: Dato;
  @Output() onEditDato: EventEmitter<Dato> = new EventEmitter();

  editarBanner: boolean = false;

  id: number = 0;
  urlImgBanner: string = "";
  tituloBanner: string = "";
  fraseBanner: string = "";

  desplegar(){
    this.editarBanner = !this.editarBanner;
    console.log(this.editarBanner);
    }
    
  onSubmit() {
    if (this.urlImgBanner.length === 0 && 
      this.tituloBanner.length === 0 &&
       this.fraseBanner.length === 0) {
      alert("Error no se ingreso ningun cambio!");
    }
    const newDato = {
      img: this.urlImgBanner,
      title: this.tituloBanner,
      detail: this.fraseBanner,
      id: this.Dato?.id
    };
    this.onEditDato.emit(newDato);
  }
}

