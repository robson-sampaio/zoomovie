import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit, OnChanges {

  constructor(private http:HttpClient) { }
  public generos = {};
  public generoEscolhido;
  public isLoad = false;
  public menuAberto = false;
  public menuColor = true;
  public fontSize = "um"
  public fonteUm = false;
  public fonteDois = false;
  public fonteTres = false;

  @Input() public idGenero;
  @Input('fontSizeData') public fonte;
  @Input('parentData') public color = "white";
  @Output() public childEvent = new EventEmitter();
  
  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=95e310c9cdf43a266b381436c3d83fc8&language=pt-BR")
      .subscribe( data =>{
        this.generos = data;
        this.isLoad = true;
        // console.log(this.generos)
      })
  }

  mudaTamanhoFonte(fonte){
    console.log(fonte)
    if(fonte == "um"){
      this.fonteUm = true;
      this.fonteDois = false;
      this.fonteTres = false;
    }else if(fonte == "dois"){
      this.fonteUm = false;
      this.fonteDois = true;
      this.fonteTres = false;
    }else if(fonte == "tres"){
      this.fonteUm = false;
      this.fonteDois = false;
      this.fonteTres = true;
    }
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(changes)
    if(changes.color){
      this.menuColor = !this.menuColor;
    }

    if(changes.fonte){
      console.log(this.fonte)
      this.mudaTamanhoFonte(this.fonte);
    }

  }

  abreFechaMenu(){
    this.menuAberto = !this.menuAberto;
  }

  getGenero(genero){
    console.log(genero)
    this.childEvent.emit(genero)
    // this.generoEscolhido = genero;
    // console.log(this.generoEscolhido);
  }

}
