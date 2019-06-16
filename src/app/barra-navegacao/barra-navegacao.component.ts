import { Component, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnChanges {
  
  private _query: string;
  public generoLista;
  @Output() public childEvent = new EventEmitter();
  @Output() public onToggle = new EventEmitter();
  @Output() public searchEvent = new EventEmitter();

  get query(): string{
    return this._query;
  }

  @Output()
  set query(value: string){
    this._query = value;
    console.log('teste');
    this.fireEventSearch();
  }

  constructor() { }

  testLog(e){
    console.log(e)
  }

  fireEventToggle(){
    this.onToggle.emit()
  }

  fireEventSearch(){
    console.log(this._query)
    this.searchEvent.emit(this._query);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if(changes.query){
      this.fireEventSearch();
    }
  }



}
