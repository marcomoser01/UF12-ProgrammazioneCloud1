import { Component } from '@angular/core';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esercizio_4';

  constructor(private dati:DatiService) {

  }

  dati_senza_di:DatiService = new DatiService();

  onClick() {
    console.log(this.dati.getSaluto("ciao con di "));
  }

  onClick_senzaDI() {
    console.log(this.dati_senza_di.getSaluto("ciao senza di "));
  }


}
