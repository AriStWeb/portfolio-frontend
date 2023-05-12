import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/interface';
import { BannerService } from 'src/app/service/banner.service';
import { DatoserviceService } from 'src/app/service/datoservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  banner: Banner[] = [];
  nombre:string="banner";

  constructor(private datoService: BannerService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.banner = Dato;
    });
  }

  guardarBanner(newBanner: Banner) {
    for (let elemento of this.banner) {
      if (elemento.id === newBanner.id) {
        this.datoService.modifcarRegistro(newBanner).subscribe(() => {
          this.banner = this.banner.filter(r => r.id !== newBanner.id);
          window.location.reload();
        })
      }
    }
  }
}
