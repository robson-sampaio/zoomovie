import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PainelSimplesComponent } from './painel-simples/painel-simples.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { BarraBuscaComponent } from './barra-navegacao/barra-busca/barra-busca.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { PainelSimplesEspecificoComponent } from './painel-simples/painel-simples-especifico/painel-simples-especifico.component';
import { DetalhesComponent } from './painel-simples/detalhes/detalhes.component';


let routes = [
  {path: "genero", component: PainelSimplesComponent },
  {path: "**", component: PainelSimplesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PainelSimplesComponent,
    BarraNavegacaoComponent,
    BarraBuscaComponent,
    MenuLateralComponent,
    PainelSimplesEspecificoComponent,
    DetalhesComponent
  ],
  entryComponents: [DetalhesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
