import { Component, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnChanges {
  
  public message = "";
  public generoLista;
  @Output() public childEvent = new EventEmitter();
  @Output() onToggle = new EventEmitter();

  constructor() { }

  testLog(e){
    console.log(e)
  }

  fireEventToggle(){
    this.onToggle.emit()
  }

  ngOnChanges(changes: SimpleChanges){

  }



}
