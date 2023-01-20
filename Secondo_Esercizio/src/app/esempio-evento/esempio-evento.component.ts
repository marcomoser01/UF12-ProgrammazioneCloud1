import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-esempio-evento',
  templateUrl: './esempio-evento.component.html',
  styleUrls: ['./esempio-evento.component.css']
})
export class EsempioEventoComponent {

  @Input() datoDiInput: number = 0;
  @Output() evenEmitter = new EventEmitter<number>();

  inc() {
    this.datoDiInput += 100;
    this.evenEmitter.emit(this.datoDiInput);
  }


}
