import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.css']
})

// Responsável por pegar a string que está sendo gerada dentro da barra de pesquisa;
export class BarraBuscaComponent{
  
  public query = ""
  @Output() public searchEvent = new EventEmitter();

  constructor() { }

  fireEvent(){
    this.searchEvent.emit(this.query);
  }
}
