import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-painel-simples',
  templateUrl: './painel-simples.component.html',
  styleUrls: ['./painel-simples.component.css']
})
export class PainelSimplesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  private apikey: string = "95e310c9cdf43a266b381436c3d83fc8"; //chave gerada na API the movie database
  private urlMovieDb: string = "https://api.themoviedb.org/3"; // URL padrão
  base_url = "https://image.tmdb.org/t/p"
  size = "/w300"
  file_path
  isLoad = false
  path
  public movies

  ngOnInit() {
    this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=95e310c9cdf43a266b381436c3d83fc8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
      .subscribe( data => {
        this.movies = data;
        console.log(this.movies)
        this.isLoad = true;
      })
  }

}
