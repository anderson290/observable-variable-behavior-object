import { Component, OnInit } from '@angular/core';
import { BehavorService } from '../behavor.service';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {


  message: string = '';

  //importando serviço
  constructor(
    private behaviorService: BehavorService
  ) { }

  ngOnInit() {
  }


  sendMessage(){
    //passar a variavel que deseja por parâmetro
    this.behaviorService.setMessage(this.message);
  }

  getDados(){
    this.behaviorService.metodoGet().subscribe(retorno=>{
      //retorno da api
      console.log(retorno);
    })
  }

  postDados(parametro){
    //passando parametro para o metodo post
    this.behaviorService.metodoPost(parametro).subscribe(retorno=>{
      //retorno da api
      console.log(retorno);
    })
  }

}
