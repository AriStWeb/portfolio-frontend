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
}
