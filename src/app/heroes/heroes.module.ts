import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent], //lista d components
  exports: [ListadoComponent], // component a mostrar
  imports: [CommonModule], // directivas personalizadas ngfor,ngif,else
})
export class HeroesModule {}
