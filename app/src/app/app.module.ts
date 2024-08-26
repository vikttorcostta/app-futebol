import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { CampeonatoBrasileiroSerieAComponent } from './campeonato-brasileiro-serie-a/campeonato-brasileiro-serie-a.component';
import {TabelaComponent} from "./campeonato-brasileiro-serie-a/tabela/tabela.component";
import {RodadasComponent} from "./campeonato-brasileiro-serie-a/rodadas/rodadas.component";
import {FasesComponent} from "./campeonato-brasileiro-serie-a/fases/fases.component";
import {ArtilhariaComponent} from "./campeonato-brasileiro-serie-a/artilharia/artilharia.component";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    CampeonatoBrasileiroSerieAComponent,
    TabelaComponent,
    RodadasComponent,
    FasesComponent,
    ArtilhariaComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
