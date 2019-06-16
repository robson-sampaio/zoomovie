import { Component, OnChanges, SimpleChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  title = 'zoomovie';
  public message;
  public generos;
  public idGenero;

  ngOnInit(){ this.title = "Zoooomovies"}

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);

  }
}
