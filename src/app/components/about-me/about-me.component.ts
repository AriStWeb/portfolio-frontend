import { Component, OnInit} from '@angular/core';
import { Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe: Dato[] = [];
  userLog: boolean = true; //pensado para log
  propietario:string = "Sotomayor Ari Soledad";
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  nombre:string="aboutMe";

  constructor(private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.aboutMe = Dato;
    });
  }
  guardarSobreMi(newAboutMe: Dato) {
    for (let elemento of this.aboutMe) {
      if (elemento.id === newAboutMe.id) {
        this.datoService.modifcarRegistro(newAboutMe,this.nombre).subscribe(() => {
          this.aboutMe = this.aboutMe.filter(r => r.id !== newAboutMe.id);
          window.location.reload();
        })
      }
    }
  }
  

}
