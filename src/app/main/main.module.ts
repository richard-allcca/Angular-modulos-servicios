import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IntroPageComponent
  ],
  exports:[
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
