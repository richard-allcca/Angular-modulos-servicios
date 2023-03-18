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

  nuevoPersonaje: Personaje = {
    nombre: 'Richard',
    poder: 12000
  };

  // NOTE - Evento para recibir data del hijo
  // recibido(data:tipoDataRecibida) {
  //   console.log("recibido", data);
  // }

  // NOTE - Inyección de dependencias(en personajes)
  // constructor(private dbzService: DbzService) { }

}
