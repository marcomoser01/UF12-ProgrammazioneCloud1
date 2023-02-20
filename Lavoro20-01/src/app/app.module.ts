import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GestioneImportoComponent } from './gestione-importo/gestione-importo.component';
import { AllarmeComponent } from './allarme/allarme.component';
import { VisualizzaPersoneComponent } from './visualizza-persone/visualizza-persone.component';

@NgModule({
  declarations: [
    AppComponent,
    GestioneImportoComponent,
    AllarmeComponent,
    VisualizzaPersoneComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
