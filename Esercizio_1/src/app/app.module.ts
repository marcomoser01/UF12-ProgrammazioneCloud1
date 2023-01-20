import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisualizzaPersoneComponent } from './visualizza-persone/visualizza-persone.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizzaPersoneComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
