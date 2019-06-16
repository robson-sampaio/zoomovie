import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(private http:HttpClient) { }
  public generos = {};
  public generoEscolhido;
  public isLoad = false;
  public menuAberto = false;

  @Input() public idGenero;
  @Output() public childEvent = new EventEmitter();
  
  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=95e310c9cdf43a266b381436c3d83fc8&language=pt-BR")
      .subscribe( data =>{
        this.generos = data;
        this.isLoad = true;
        // console.log(this.generos)
      })
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
