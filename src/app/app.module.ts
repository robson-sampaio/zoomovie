import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { BarraBuscaComponent } from './barra-navegacao/barra-busca/barra-busca.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { PainelSimplesEspecificoComponent } from './painel-simples/painel-simples-especifico/painel-simples-especifico.component';


let routes = [
  {path: "genero", component: PainelSimplesComponent },
  {path: "**", component: PainelSimplesComponent }
]

// Ação
// Aventura
// Animação
// Comédia
// Crime
// Documentário
// Drama
// Família
// Fantasia
// História
// Terror
// Música
// Mistério
// Romance
// Ficção científica
// Cinema TV
// Thriller
// Guerra
// Faroeste

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    BarraBuscaComponent,
    MenuLateralComponent,
    PainelSimplesEspecificoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
