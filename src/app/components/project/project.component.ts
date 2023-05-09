import { Component } from '@angular/core';
import { Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
 projects: Dato[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="project";

  constructor(private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.projects = Dato;
      console.log(this.projects);
    });
  }

  guardarWorks(dataEdit:Dato){
    for (let elemento of this.projects) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit,this.nombre).subscribe(() => {
          this.projects = this.projects.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Dato) {
    if (this.projects.length != 1) {
      this.datoService.eliminarRegistro(registro,this.nombre).subscribe(
        () => {
          this.projects = this.projects.filter(r => r.id != registro.id);
        }
      )
      window.location.reload();
    }
    else {
      alert("no se puede eliminar este registro: la seccion quedara vacia");
    }
  }

  agregarRegistro(registro:Dato) {
    this.datoService.altaRegistro(registro,this.nombre).subscribe((registro) => {
      this.projects.push(registro);
    })
  }
}
