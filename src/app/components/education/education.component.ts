import { Component } from '@angular/core';
import { Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Dato[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="education";

  constructor(private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.education = Dato;
    });
  }

  guardarWorks(dataEdit:Dato){
    for (let elemento of this.education) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit,this.nombre).subscribe(() => {
          this.education = this.education.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Dato) {
    if (this.education.length != 1) {
      this.datoService.eliminarRegistro(registro,this.nombre).subscribe(
        () => {
          this.education = this.education.filter(r => r.id != registro.id);
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
      this.education.push(registro);
    })
  }


}
