import { Component } from '@angular/core';
import { Educacion } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Educacion[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="educacion";

  constructor(private datoService: EducacionService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.education = Dato;
    });
  }

  guardarWorks(dataEdit:Educacion){
    for (let elemento of this.education) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit).subscribe(() => {
          this.education = this.education.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Educacion) {
    console.log (registro);
    if (this.education.length != 1) {
      this.datoService.eliminarRegistro(registro).subscribe(
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

  agregarRegistro(registro:Educacion) {
    this.datoService.altaRegistro(registro).subscribe((registro) => {
      this.education.push(registro);
    })
    window.location.reload();
  }


}
