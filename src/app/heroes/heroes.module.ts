import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';
import { HeroeMainPageComponent } from './heroe-main-page/heroe-main-page.component';

@NgModule({
  declarations: [
    HeroeComponent, ListadoComponent, HeroeMainPageComponent
  ],
  exports: [
    HeroeMainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}