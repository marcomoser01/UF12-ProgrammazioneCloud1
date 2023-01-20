import { Component } from '@angular/core';
import { DatiService } from '../services/dati.service';

@Component({
  selector: 'app-altra-componente',
  templateUrl: './altra-componente.component.html',
  styleUrls: ['./altra-componente.component.css']
})
export class AltraComponenteComponent {

  contatore: number = 0;
  constructor(private datiService: DatiService) { }
  

  onGetContatore() {
    this.contatore = this.datiService.getContatore();
  }
}
