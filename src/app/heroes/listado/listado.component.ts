import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman'];
  heroDeleted: string = '';

  borrarHero() {
    this.heroDeleted = this.heroes.pop() || '';
  }

  delete(i: string) {
    this.heroDeleted = i;
    return this.heroes = this.heroes.filter((el) => el !== i);
  }
}