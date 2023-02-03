import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Persona } from './domains/Persona';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lavoro20-01';
  persona!: Persona;
  persone?: Observable<Persona[]>;

  constructor(private data: DataService) {
    this.persone = this.data.persone;
    this.persona = { nome: "abc", importo: 0 };
  }

  add(persona: Persona) {
    //let copy = JSON.parse(JSON.stringify(persona)) as typeof persona;
    if (!isNaN(Number(persona.importo.toString()))) {
      let copy = <Persona>{};
      copy.nome = persona.nome;
      copy.importo = persona.importo;
      this.persone?.pipe(tap(
        res => {
          res.push(copy);
        }
      ));
    } else {
      alert("L'importo deve essere un valore numerico");
      this.persona.importo = 0;
    }

    this.data.persone = this.persone;

  }

}
