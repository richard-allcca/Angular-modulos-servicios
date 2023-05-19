import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorComponent } from './contador/contador/contador.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { HeroeMainPageComponent } from './heroes/heroe-main-page/heroe-main-page.component';
import { ViewportComponent } from './ViewportComponent/Viewport.component';
import { IntroPageComponent } from './main/intro-page/intro-page.component';

export const routes: Routes = [
  {
    path: 'country',
    loadChildren: ()=> import('./pais/pais.module')
    .then(m => m.PaisModule )
  },
  {
    path: '',
    component: IntroPageComponent,
  },
  {
    path: 'contador',
    component: ContadorComponent,
    pathMatch: 'full',
  },
  {
    path: 'dbz',
    component: MainPageComponent,
  },
  {
    path: 'gifs',
    component: GifsPageComponent,
  },
  {
    path: 'heroes',
    component: HeroeMainPageComponent,
  },
  {
    path: 'viewport',
    component: ViewportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
