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
  userLog: boolean = true; //pensado para logIn

  constructor(
    private datoService: DatoserviceService
  ) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.banner = Dato;
    });
  }
  guardarBanner(newBanner: Dato) {
    this.banner[0] = newBanner;
  }
}
