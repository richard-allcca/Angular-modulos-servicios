import { Component } from '@angular/core';
import { Gif } from '../interface/gifs.interface';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  resultados: Gif[] = [];

  get getResultados() {
    return this.gifService.resultados;
  }

  constructor(private gifService: GifService) { }

}
