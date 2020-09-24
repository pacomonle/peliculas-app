import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';
  constructor(
    public peliculasService: PeliculasService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros =>{

      console.log(parametros);
      // tslint:disable-next-line: no-string-literal
      this.regresarA = parametros['pag'];

      // tslint:disable-next-line: no-string-literal
      if( parametros['busqueda'] ){
        // tslint:disable-next-line: no-string-literal
        this.busqueda = parametros['busqueda'];
      }

      // tslint:disable-next-line: no-string-literal
      this.peliculasService.getPelicula( parametros['id'] )
          .subscribe( pelicula => {
            console.log(pelicula);
            this.pelicula = pelicula;
          },
          error => { console.log('error', error); }
          );

    });
  }

}
