import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-painel-simples-especifico',
  templateUrl: './painel-simples-especifico.component.html',
  styleUrls: ['./painel-simples-especifico.component.css']
})
export class PainelSimplesEspecificoComponent implements OnInit {

  constructor() { }
  
  @Input() base_url;
  @Input() size;
  @Input() movies;

  ngOnInit() {
  }

}
