import { Injectable } from "@angular/core"
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private personajes: Personaje[] = [
    {
      nombre: 'Golu',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7000,
    }
  ];

  // ? Usamos spread operator para romper la referencia entre los objetos
  get getPersonajes(): Personaje[] {
    return [...this.personajes];
  }

  constructor() {
  }

  agregarPersonajes(data: Personaje) {
    this.personajes.push(data);
  }
}