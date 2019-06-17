import { Component, OnChanges, SimpleChanges, Output, EventEmitter, Input } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.css']
})
export class BarraNavegacaoComponent implements OnChanges {
  
  private _query: string;
  public generoLista;
  public color = "dark";
  public iconColor = "dark"
  public fontSize = "";
  public indice = 0;
  public home = false;
  public fonteUm = true;
  public fonteDois = false;
  public fonteTres = false;

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

  mudaCor(){
    if(this.color == "dark"){
      this.color = "white";
      this.iconColor = "light";
    }else{
      this.color = "dark";
      this.iconColor = "dark"
    } 
  }

  homeEvent(){
    this.home = !this.home;
  }

  aumentaFonte(){
    if(this.indice < 3){
      this.indice = this.indice + 1;
      if(this.indice == 0){
        this.fontSize = "um";
        this.fonteUm = true;
        this.fonteDois = false;
        this.fonteTres = false;
      }else if(this.indice == 1){
        this.fontSize = "dois";
        this.fonteUm = false;
        this.fonteDois = true;
        this.fonteTres = false;
      }else{
        this.fontSize = "tres";
        this.fonteUm = false;
        this.fonteDois = false;
        this.fonteTres = true;
      } 
    }
  }

  

  normalizaFonte(){
    this.fontSize = "um";
    this.fonteUm = true;
    this.fonteDois = false;
    this.fonteTres = false;
    this.indice = 0;
  }

  diminuiFonte(){
    
    if(this.indice > 0){
      this.indice = this.indice - 1;
      if(this.indice == 0){
        this.fontSize = "um";
        this.fonteUm = true;
        this.fonteDois = false;
        this.fonteTres = false;
      }else if(this.indice == 1){
        this.fontSize = "dois";
        this.fonteUm = false;
        this.fonteDois = true;
        this.fonteTres = false;
      }else{
        this.fontSize = "tres";
        this.fonteUm = false;
        this.fonteDois = false;
        this.fonteTres = true;
      } 
    }
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
