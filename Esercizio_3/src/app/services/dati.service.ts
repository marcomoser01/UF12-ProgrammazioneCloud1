import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../domains/Post';

@Injectable({
  providedIn: 'root'
})
export class DatiService {

  posts$?: Observable<Post[]>;
  url: string = "https://jsonplaceholder.typicode.com/posts";

  // private http:HttpClient <--> DI dependency injection
  constructor(private http: HttpClient) { 
    this.posts$ = http.get<Post[]>(this.url);

  }

}
