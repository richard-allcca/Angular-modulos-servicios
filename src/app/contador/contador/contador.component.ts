import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es de: <strong>{{ base }}</strong>
    </h3>

    <button (click)="conteo('sumar')">
      +{{ base }}
    </button>

    <span>{{ numero }}</span>

    <button (click)="conteo('restar')">
      -{{ base }}
    </button>

    <button (click)="conteo('reset')">
      reset to {{ base }}
    </button>
  `,
})
export class ContadorComponent {
  title: string = 'Contador App';
  numero: number = 10;

  base: number = 15;

  conteo(valor: string) {
    if (valor === 'sumar') {
      this.numero += this.base;
    }
    if (valor === 'restar') {
      this.numero -= this.base;
    }
    if (valor === 'reset') {
      this.numero = this.base;
    }
  }
}
