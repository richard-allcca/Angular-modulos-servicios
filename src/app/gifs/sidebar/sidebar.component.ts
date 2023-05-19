import { Component } from '@angular/core';
import { GifService } from './../services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  historialGif: string[] = [];

  get historial() {
    const data = this.gifService.getHistorial;
    return data;
  }

  constructor(private gifService: GifService) { }

  buscarGif(query: string) {
    this.gifService.buscarGif(query);
  }
}
