import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Golu',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7000,
    }
  ];

  nuevo: Personaje = {
    nombre: 'Richard',
    poder: 12000
  }

}
