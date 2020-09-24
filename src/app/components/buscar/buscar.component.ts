import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
 public buscar: string = '';
 public peliculasFilt: any[] = [];
 public peliculas: any;
  constructor(
    public peliculasService: PeliculasService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros =>{
      console.log(parametros);
      // tslint:disable-next-line: no-string-literal
      if( parametros['texto'] ){
        // tslint:disable-next-line: no-string-literal
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }
  // tslint:disable-next-line: typedef
  buscarPelicula(){
    if ( this.buscar.length === 0) {
      return;
    }

    this.peliculasService.buscarPelicula( this.buscar )
        .subscribe(
          resp => {
            // console.log(resp);
            this.peliculas = resp;
            this.peliculasFilt = this.peliculas.results;
            console.log(this.peliculasFilt);
          },
          error => {
            console.log('error', error);
          }
        );

  }

}
