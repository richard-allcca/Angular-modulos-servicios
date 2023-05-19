import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { AppRoutingModule } from './app.routing.module';
import { ViewportComponent } from './ViewportComponent/Viewport.component';
import { MainModule } from './main/main.module';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [AppComponent, ViewportComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContadorModule,
    DbzModule,
    GifsModule,
    HeroesModule,
    HttpClientModule,
    SharedModule,
    MainModule,
    PaisModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
