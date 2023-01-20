import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltraComponenteComponent } from './altra-componente/altra-componente.component';
import { EsempioEventoComponent } from './esempio-evento/esempio-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    AltraComponenteComponent,
    EsempioEventoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
