import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})

export class PainelSimplesComponent implements OnInit, OnChanges {

  private apikey: string = "95e310c9cdf43a266b381436c3d83fc8"; //chave gerada na API the movie database
  private urlMovieDb: string = "https://api.themoviedb.org/3"; // URL padrão
  public base_url = "https://image.tmdb.org/t/p";
  public size = "/w300";
  public file_path;
  public isLoad = false;
  public movies = {};
  public detalhes;
  public mostrarDetalhes = false;
  public isHover = false;
  public innerText = '';
  
  // @Input('parentData') public busca =""
  @Input('parentData') public idGenero;
  @Input('searchData') public query;
  @Input('homeEvent') public home;

  constructor(private http:HttpClient, public dialog: MatDialog) {}

  fireEvent(event){
    this.innerText = event.target.currentSrc;
    console.log(event);
    console.log(this.innerText);
  }

  getDetails(movie){
    this.detalhes = movie;
    console.log(this.detalhes);
    this.dialog.open(DetalhesComponent, {
      data: {
        filme:movie
      }
    })
  }

  showTitle(){
    this.isHover = true;
  }

  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&sort_by=popularity.desc&include_adult=false&include_video=false&language=pt-BR")
      .subscribe( data => {
        this.movies = data;
        // console.log(this.movies)
        this.isLoad = true;
      })
  }

  searchEvent(evento){
    if(evento){
          console.log(evento)
          this.http.get("https://api.themoviedb.org/3/search/company?api_key="+this.apikey+"&query="+evento+"&page=1")
          .subscribe(data => {
            this.movies = data
            // console.log(data)
            this.isLoad = true
          })
        }else{
          this.http.get("https://api.themoviedb.org/3/search/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=pt-BR&query="+evento+"&page=1&include_adult=true")
          .subscribe( data => {
            this.movies = data
            this.isLoad = true
          })
        }
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log(changes)  
    if(changes.idGenero){
      this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&sort_by=popularity.desc&include_adult=false&language=pt-BR&include_video=false&with_genres="+this.idGenero)
        .subscribe(data =>{
          this.movies = data;
          // console.log(data);
          this.isLoad = true;
        })
    }

    if(changes.query){
      this.http.get("https://api.themoviedb.org/3/search/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=pt-BR&query="+this.query+"&page=1&include_adult=true")
        .subscribe(data =>{
          this.movies = data;
          console.log(this. query);
          this.isLoad = true;
        })
    }

    if(changes.home){
      this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&sort_by=popularity.desc&include_adult=false&include_video=false&language=pt-BR")
      .subscribe( data => {
        this.movies = data;
        // console.log(this.movies)
        this.isLoad = true;
      })
    }

  }

}
