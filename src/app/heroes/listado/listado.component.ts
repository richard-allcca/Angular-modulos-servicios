import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',//tag html para render
  templateUrl: './listado.component.html',//hoja html enlazada
  styleUrls: ['./listado.component.css'],// hoja css enlazada
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk'];
  heroeBorrado?: string = '';
  numero: number = 15.34;
  constructor() {}

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift();
    // this.heroeBorrado = heroeBorrado;
  }
}
