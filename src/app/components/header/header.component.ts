import { Component } from '@angular/core';
import { Dato } from 'src/app/interface';
import { Banner } from 'src/app/bd';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  banner:Dato[] = Banner ;
  
  userLog:boolean=true;

  guardarBanner(newBanner:Dato){
    this.banner [0]= newBanner;
  }

}
