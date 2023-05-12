import { Component } from '@angular/core';
import { Persona } from 'src/app/interface';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footer: Persona[]=[];
  

  constructor(private datoService: PersonaService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.footer= Dato;
    });
  }

}
