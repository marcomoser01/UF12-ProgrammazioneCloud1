import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../domains/film';

@Injectable()

export class FilmService {

  url : string =  "http://localhost:8099/api/film"
  constructor(private http:HttpClient) { }
 // crud
  getAll(): Observable<Film[]>{
    return this.http.get<Film[]>(this.url);
  }

  canc(id:number){
    return this.http.delete(this.url+"/"+id);
  }

  add(film:Film){
    return this.http.post(this.url,film);
  }
  update(film:Film){
    return this.http.put(this.url,film);
  }

}
