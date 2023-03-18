import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AddFormComponent } from './add-form/add-form.component';

import { DbzService } from './Services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AddFormComponent
  ],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})
export class DbzModule { }
