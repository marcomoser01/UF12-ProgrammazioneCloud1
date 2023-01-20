import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './domains/Post';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Terzo_Esercizio';
  visualizza: boolean = false;
  posts$?: Observable<Post[]>

  constructor(private data: DatiService) {
    this.posts$ = data.posts$;
  }

  onVisualizza() {
    if(this.visualizza) {
      this.visualizza = false;
    } else {
      this.visualizza = true;
    }
  }

}
