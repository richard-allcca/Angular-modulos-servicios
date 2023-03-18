import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../Services/dbz.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // NOTE - Evento para enviar data al padre
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // injeccion de servicios
  constructor(private dbzService: DbzService) { }

  agregar() {
    // validación de inputs
    if (this.nuevo.nombre.trim().length === 0) return;
    if (!this.nuevo.poder) return;

    // service
    this.dbzService.agregarPersonajes(this.nuevo);

    // NOTE - envio de data al padre con input
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }

}
