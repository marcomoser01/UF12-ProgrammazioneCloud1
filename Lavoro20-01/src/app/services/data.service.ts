import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../domains/Persona';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  persone? = new Observable<Persona[]>;

  constructor() { }
}
