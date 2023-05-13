import { Component } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  works: ExperienciaLaboral[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="experiencia";

  constructor(private datoService: ExperienciaService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.works = Dato;
    });
  }

  guardarWorks(dataEdit:ExperienciaLaboral){
    for (let elemento of this.works) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit).subscribe(() => {
          this.works = this.works.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: ExperienciaLaboral) {
      if (this.works.length != 1) {
      this.datoService.eliminarRegistro(registro).subscribe(
        () => {
          this.works = this.works.filter(r => r.id != registro.id);
        }
      )
      window.location.reload();
    }
    else {
      alert("no se puede eliminar este registro: la seccion quedara vacia");
    }
  }

  agregarRegistro(registro:ExperienciaLaboral) {
    console.log(registro);
    registro.id = (this.works.length) + 1;
    this.datoService.altaRegistro(registro).subscribe((registro) => {
      this.works.push(registro);
    })
    window.location.reload();
  }
}
