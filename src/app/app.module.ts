import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
