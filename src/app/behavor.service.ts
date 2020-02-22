import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BehavorService {

  //criando uma variavel observable para escutá-la

  public messageSource = new BehaviorSubject<any>(null);   
    messageVariable = this.messageSource.asObservable();
 
  constructor(
    private http: HttpClient
  ) { }

  setMessage(filter) {
    this.messageSource.next(filter);
  }

  metodoGet(){
    //retornando dados get da api
    return this.http.get<any[]>("urlDaApi");
  }

  metodoPost(parametro){
    //retornando dados post da api
    return this.http.post<any[]>("urlDaApi", parametro);
  }
}