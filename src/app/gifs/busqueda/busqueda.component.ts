import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  // @ViewChild('nameRef') nameAsignateForUse: type
  // non-null assertion operator "!"
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) { }

  buscarGif() {

    const valor = this.textBuscar.nativeElement.value;

    if (valor.trim().length === 0) return;

    this.gifService.buscarGif(valor);

    this.textBuscar.nativeElement.value = '';
  }


}
