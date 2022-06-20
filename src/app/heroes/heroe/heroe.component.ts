import { Component } from "@angular/core";



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // styleUrls: './heroe.component.css'
})
export class HeroeComponent {

  nombre: string = 'Ironman';
  edad: number = 30;

  obtenerDatos(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  get capitalizado(): string {
    // let resp = this.nombre.split('')
    // return resp[0].toLocaleUpperCase() + resp.slice(1).join('');
    return this.nombre.toUpperCase();
  }

  cambiarNombre(): string {
    return this.nombre = 'Thor';
  }

  cambiarEdad(edad: number): number {
    return this.edad = edad;
  }

}