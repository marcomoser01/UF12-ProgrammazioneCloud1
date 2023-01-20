import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Domain/Post';
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
  visualizza: boolean = false;

  posts$?: Observable<Post[]>;

  //Dichiarazione dell'oggetto datiService, di tipo DatiService, con riferimento al service istanziato dal freamwork
  constructor(private datiService: DatiService) {
    this.posts$ = this.datiService.posts$; //Questa è una tipologia stateless
    this.datiService.subject$.subscribe(
      res => {
        this.contatore = res;
      }
    )
  }

  onClick() {
    this.messaggioDiSaluto = this.datiService.getSaluto();
  }
  onInc() {
    this.datiService.inc();
    // this.datiService.subject$.next(this.datiService.getContatore());
    this.contatore = this.datiService.contatore;
  }

  gestoreEvento(valore: number) {
    this.contatore = valore;
    //this.datiService.contatore = valore;
  }

  onVisualizza() {
    if (this.visualizza) {
      this.visualizza = false;
    } else {
      this.visualizza = true;
    }
  }
}
