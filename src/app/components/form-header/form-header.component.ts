import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Banner } from 'src/app/interface';


@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent {

  @Input() Dato: Banner={ id : 0,
                          tituloBanner : "",
                          fraseBanner : "",
                          urlImgBanner : ""
                        };
  @Output() onEditDato: EventEmitter<Banner> = new EventEmitter();

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
    if (this.urlImgBanner.length === 0 || 
      this.tituloBanner.length === 0 ||
       this.fraseBanner.length === 0) {
      alert("complete los campos obligatorios marcados con *");
    }
    else{
      const newDato: Banner = { id: this.Dato.id,
                              urlImgBanner: this.urlImgBanner,
                              tituloBanner: this.tituloBanner,
                              fraseBanner: this.fraseBanner,
                              };
      this.onEditDato.emit(newDato);
    }
  }
}

