import { Component, OnInit } from '@angular/core';
import { DB, Dato } from 'src/app/interface';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  banner: Dato[] = [];
  userLog: boolean = true; //pensado para log
  activarOpcionEliminar: boolean = true;
  activarOpcionAgregar: boolean = true;
  nombre:string="header";

  constructor(private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato(this.nombre).subscribe((Dato) => {
      this.banner = Dato;
    });
  }

  guardarBanner(newBanner: Dato) {
    for (let elemento of this.banner) {
      if (elemento.id === newBanner.id) {
        this.datoService.modifcarRegistro(newBanner,this.nombre).subscribe(() => {
          this.banner = this.banner.filter(r => r.id !== newBanner.id);
          window.location.reload();
        })
      }
    }

  }

  eliminarRegistro(registro: Dato) {
    if (this.banner.length != 1) {
      this.datoService.eliminarRegistro(registro,this.nombre).subscribe(
        () => {
          this.banner = this.banner.filter(r => r.id != registro.id);
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
      this.banner.push(registro);
    })
  }




}
