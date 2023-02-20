import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDashboardComponent } from './film-dashboard/film-dashboard.component';

const routes: Routes = [
  {
    path: '', component: FilmDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmRoutingModule { }
