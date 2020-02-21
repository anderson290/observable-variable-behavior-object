import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavorService {

  //criando uma variavel observable para escutá-la

  public messageSource = new BehaviorSubject<any>(null);   
    messageVariable = this.messageSource.asObservable();
 
  constructor() { }

  setMessage(filter) {
    this.messageSource.next(filter);
  }
}
