import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../Domain/Post';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  messaggio: string = "hello dal service";
  contatore: number = 0;
  subject$ = new Subject<number>();
  url: string = "https://jsonplaceholder.typicode.com/posts";
  posts$ = new Observable<Post[]>();

  constructor(private http: HttpClient) {
    this.posts$ = http.get<Post[]>(this.url);
  }


  //Metodo richiamabile da qualsiasi componente
  getSaluto() {
    return this.messaggio;
  }
  inc() {
    this.contatore++;
    this.subject$.next(this.contatore);
  }
  getContatore() {
    return this.contatore;
  }
}
