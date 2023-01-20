import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  contatore: number = 0;

  constructor() { }

  messaggio: string = "hello dal service";

  //Metodo richiamabile da qualsiasi componente
  getSaluto() {
    return this.messaggio;
  }
  inc() {
    this.contatore++;
  }
  getContatore() {
    return this.contatore;
  }
}
