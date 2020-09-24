import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit, DoCheck   {
  // tslint:disable-next-line: no-input-rename
  @Input('peliculas') peliculas;
  // tslint:disable-next-line: no-input-rename
  @Input('titulo') titulo;
  constructor() {

  }

  ngOnInit(): void {
   // console.log(this.peliculas);
  }

  ngDoCheck(): void {
   // console.log(this.peliculas);
  }

}
