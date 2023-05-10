import { Component } from '@angular/core';
import { Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  works: Dato[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  activarOpcioneditar: boolean = true;

  nombre:string="works";

  constructor(private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.works = Dato;
    });
  }

  guardarWorks(dataEdit:Dato){
    for (let elemento of this.works) {
      if (elemento.id === dataEdit.id) {
        this.datoService.modifcarRegistro(dataEdit,this.nombre).subscribe(() => {
          this.works = this.works.filter(r => r.id !== dataEdit.id);
          window.location.reload();
        })
      }
    }
  }
  eliminarRegistro(registro: Dato) {
    if (this.works.length != 1) {
      this.datoService.eliminarRegistro(registro,this.nombre).subscribe(
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

  agregarRegistro(registro:Dato) {
    console.log(registro);
    registro.id = (this.works.length) + 1;
    this.datoService.altaRegistro(registro,this.nombre).subscribe((registro) => {
      this.works.push(registro);
    })
  }
}
