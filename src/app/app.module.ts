import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent], //componentes
  imports: [BrowserModule, HeroesModule, ContadorModule,DbzModule], // modulos
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

// ? despliegue
// https://peaceful-brown-3f1b30.netlify.app