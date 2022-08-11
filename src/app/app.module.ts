import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DbzModule } from './dbz/dbz.module';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [AppComponent],
   imports: [BrowserModule, HttpClientModule, DbzModule, SharedModule, GifsModule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
