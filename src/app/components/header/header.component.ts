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
  activarOpcionEliminar:boolean=true;

  constructor( private datoService: DatoserviceService) { }

  ngOnInit(): void {
    this.datoService.getDato().subscribe((Dato) => {
      this.banner = Dato;
    });
  }

  guardarBanner(newBanner: Dato) {
    this.banner[0] = newBanner;
  }

  eliminarRegistro(registro:Dato){
    if(this.banner.length != 1 ){
    this.datoService.eliminarRegistro(registro).subscribe(
      ()=>{
        this.banner = this.banner.filter(r => r.id != registro.id);
      }
    )}
    else{
      alert("no se puede eliminar este registro: la seccion quedara vacia");
    }
  }

 
}
