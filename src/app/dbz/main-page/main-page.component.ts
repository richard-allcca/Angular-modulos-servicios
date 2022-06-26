import { Component } from '@angular/core';
import { DbzService } from '../Services/dbz.service';

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
  }

  // Inyección de dependencias
  // constructor(private dbzService: DbzService) { }

}
