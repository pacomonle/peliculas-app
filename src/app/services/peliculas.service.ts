import { Injectable } from '@angular/core';

// import 'rxjs/Rx'; // Map
import {Observable} from 'rxjs';
// import { Jsonp } from '@angular/http';
import { HttpClientJsonpModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey: string = 'a92ce25265c93c969314fc4cfac76b9b';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  peliculas: any[] = [];
  constructor(
    private httpClient: HttpClient
    ) { }

  // tslint:disable-next-line: typedef
  getPopulares(){

    const url = `${ this.urlMoviedb }/movie/popular?api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
               // .map( res => res.jsonp());
  }

  // tslint:disable-next-line: typedef
  buscarPelicula( texto: string ){

    const url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
               // .map( res => res.jsonp());
  }

  // tslint:disable-next-line: typedef
  getTopRated(){

    const url = `${ this.urlMoviedb }/movie/top_rated?api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
              //  .map( res=> res.json().results);
  }

  // tslint:disable-next-line: typedef
  getCartelera(){



    const url = `${ this.urlMoviedb }/movie/now_playing?api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
              //  .map( res=> res.json().results);
  }


  // tslint:disable-next-line: typedef
  getPelicula( id: string ){

    const url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;

    return this.httpClient.get( url );
               // .map( res=> res.json());
  }
}
