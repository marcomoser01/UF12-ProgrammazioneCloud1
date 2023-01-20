import { compileFactoryFunction } from '@angular/compiler';
import { Component } from '@angular/core';
import { Persona } from './domain/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  persone: Persona[] = [];
  persona!: Persona;

  constructor() {
    this.persona = { nominativo: "Nome", importo: 0 };
  }

  add(persona: Persona) {
    //let copy = JSON.parse(JSON.stringify(persona)) as typeof persona;
    if (!isNaN(Number(persona.importo.toString()))) {
      let copy = <Persona>{};
      copy.nominativo = persona.nominativo;
      copy.importo = persona.importo;
      this.persone.push(copy);
    } else {
      alert("L'importo deve essere un valore numerico");
      this.persona.importo = 0;
    }

  }
}
