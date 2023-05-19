import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { HomeComponent } from './home/home.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'pais',
        component: PorPaisComponent,
        pathMatch: 'full'
      },
      {
        path: 'region',
        component: PorRegionComponent,
        pathMatch: 'full'
      },
      {
        path: 'capital',
        component: PorCapitalComponent
      },
      {
        path: 'pais/:id',
        component: VerPaisComponent
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]
  }
]
@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaisRoutingModule {}