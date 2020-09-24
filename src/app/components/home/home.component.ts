import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasService } from '../../services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public cartelera: any;
 public populares: any;
 public topRanked: any;
  constructor(
    private peliculasService: PeliculasService
  ){
      this.peliculasService.getPopulares().subscribe(
        resp => {
          console.log(resp);
          this.populares = resp;
        }
      );
      this.peliculasService.getTopRated().subscribe(
        resp => {
          console.log(resp);
          this.topRanked = resp;
        }
      );

      this.peliculasService.getCartelera().subscribe(
        resp => {
          console.log(resp);
          this.cartelera = resp;
        }
      );

  }

  ngOnInit(): void {
  }

}
