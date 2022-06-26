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
  }


  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  constructor(private dbzService: DbzService) { }

  agregar() {
    // validación de inputs
    if (this.nuevo.nombre.trim().length === 0) return;
    if (!this.nuevo.poder) return;

    // service 
    this.dbzService.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
