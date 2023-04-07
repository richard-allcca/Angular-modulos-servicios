import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContadorComponent } from './contador/contador/contador.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { ViewportComponent } from './ViewportComponent/Viewport.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';

export const routes: Routes = [
  {
    path: '',
    component: ViewportComponent,
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
    component: HeroeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
