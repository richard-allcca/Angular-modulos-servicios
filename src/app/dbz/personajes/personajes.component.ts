import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.getPersonajes;
  }

  constructor(private dbzService: DbzService) { }

}
