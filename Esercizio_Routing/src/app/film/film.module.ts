import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmDashboardComponent } from './film-dashboard/film-dashboard.component';
import { FilmNavComponent } from './film-nav/film-nav.component';


@NgModule({
  declarations: [
    FilmDashboardComponent,
    FilmNavComponent
  ],
  imports: [
    CommonModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
