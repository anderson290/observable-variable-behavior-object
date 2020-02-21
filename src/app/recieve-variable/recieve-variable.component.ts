import { Component, OnInit } from '@angular/core';
import { BehavorService } from '../behavor.service';

@Component({
  selector: 'app-recieve-variable',
  templateUrl: './recieve-variable.component.html',
  styleUrls: ['./recieve-variable.component.scss']
})
export class RecieveVariableComponent implements OnInit {


  message: string = '';

  //importando serviço
  constructor(
    private behaviorService: BehavorService
  ) { }

  ngOnInit() {
    

    //se inscrevendo na variavel para escutar seu valor
    this.behaviorService.messageVariable.subscribe(resposta=>{
      //inserindo a resposta da variavel do serviço na nossa variavel
        this.message = resposta;
    });
  
  }

}
