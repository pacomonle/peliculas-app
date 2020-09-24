import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PeliculasService } from './services/peliculas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculas-app';

  constructor(
    private peliculasService: PeliculasService
  ){
      this.peliculasService.getPopulares().subscribe(
        resp => {
          console.log(resp);
        }
      );
  }
}
