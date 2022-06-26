import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../../dbz/interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  // @input - propiedades del padre al hijo
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  agregar() {
    // validation content
    if (this.nuevo.nombre.trim().length === 0) {
      alert('No has ingresado un Personaje');
      return;
    }

    // inyección de service
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}

//? Notas:
// @Output() onNameEventCustom: EventEmitter<TipoEnviado> = new EventEmitter();
// this.onNameEventCustom.emit(this.nuevo); 
// el componente.html receptor recibe la data del evento como propiedad con:
// (nameEventoEmitter)="nameEventoReceptor($event)"


