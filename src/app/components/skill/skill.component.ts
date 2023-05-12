import { Component } from '@angular/core';
import { Tecnologia } from 'src/app/interface';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skills: Tecnologia[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="habilidad";

  constructor(private datoService: TecnologiaService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.skills = Dato;
    });
  }

  guardarWorks(dataEdit:Tecnologia){
    for (let elemento of this.skills) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit).subscribe(() => {
          this.skills = this.skills.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Tecnologia) {
    if (this.skills.length != 1) {
      this.datoService.eliminarRegistro(registro).subscribe(
        () => {
          this.skills = this.skills.filter(r => r.id != registro.id);
        }
      )
      window.location.reload();
    }
    else {
      alert("no se puede eliminar este registro: la seccion quedara vacia");
    }
  }

  agregarRegistro(registro:Tecnologia) {
    this.datoService.altaRegistro(registro).subscribe((registro) => {
      this.skills.push(registro);
    })
  }

}
