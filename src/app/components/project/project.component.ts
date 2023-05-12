import { Component } from '@angular/core';
import { Proyecto } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
 projects: Proyecto[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="proyecto";

  constructor(private datoService: ProyectoService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.projects = Dato;
      console.log(this.projects);
    });
  }

  guardarWorks(dataEdit:Proyecto){
    for (let elemento of this.projects) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit).subscribe(() => {
          this.projects = this.projects.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Proyecto) {
    if (this.projects.length != 1) {
      this.datoService.eliminarRegistro(registro).subscribe(
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

  agregarRegistro(registro:Proyecto) {
    this.datoService.altaRegistro(registro).subscribe((registro) => {
      this.projects.push(registro);
    })
  }
}
