import { Component } from '@angular/core';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Secondo_Esercizio';
  messaggioDiSaluto: string = "";
  contatore: number = 0;

  //Dichiarazione dell'oggetto datiService, di tipo DatiService, con riferimento al service istanziato dal freamwork
  constructor(private datiService: DatiService) { }

  onClick() {
    this.messaggioDiSaluto = this.datiService.getSaluto();
  }
  onInc() {
    this.datiService.inc();
    this.contatore = this.datiService.contatore;
  }

  gestoreEvento(valore: number) {
    this.contatore = valore;
    //this.datiService.contatore = valore;
  }
}
