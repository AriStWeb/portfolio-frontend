import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/interface';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe:Persona[] = [];
  nombre:string="persona";

  constructor(private datoService: PersonaService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.aboutMe = Dato;
    });
  }
  guardarSobreMi(newAboutMe: Persona) {
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
