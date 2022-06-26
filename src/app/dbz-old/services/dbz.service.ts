import { Injectable } from '@angular/core';
import { Personaje } from '../../dbz/interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegetas',
      poder: 7500,
    },
  ];

  // ? return de personajes desligados de su referencia
  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio Inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
