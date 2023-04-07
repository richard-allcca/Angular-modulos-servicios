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


@NgModule({
  declarations: [	AppComponent,ViewportComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, DbzModule, SharedModule, GifsModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
