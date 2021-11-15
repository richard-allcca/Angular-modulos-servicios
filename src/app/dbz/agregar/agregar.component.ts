import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from './../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //? propiedades del padre al hijo
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  // @Output() onPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      alert('No has ingresado un Personaje');
      return;
    }

    // this.onPersonaje.emit(this.nuevo); // con eventemitter
    this.dbzService.agregarPersonaje(this.nuevo); // inyeccion de servicio

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
