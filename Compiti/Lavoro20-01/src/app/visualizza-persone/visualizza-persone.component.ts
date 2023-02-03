import { Component, Input } from '@angular/core';
import { Persona } from '../domains/Persona';

@Component({
  selector: 'app-visualizza-persone',
  templateUrl: './visualizza-persone.component.html',
  styleUrls: ['./visualizza-persone.component.css']
})
export class VisualizzaPersoneComponent {
  @Input() persona!: Persona;
}
