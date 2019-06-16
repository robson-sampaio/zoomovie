import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.css']
})

// Responsável por pegar a string que está sendo gerada dentro da barra de pesquisa;
export class BarraBuscaComponent implements OnInit, OnChanges {
  
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('barra-busca')
  }

  ngOnInit(){}

  buscaEvento(evento){
    console.log(evento)
    this.childEvent.emit(evento)
  }

}
