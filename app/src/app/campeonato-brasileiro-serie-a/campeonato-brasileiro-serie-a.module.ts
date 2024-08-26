import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { ArtilhariaComponent } from './artilharia/artilharia.component';
import { FasesComponent } from './fases/fases.component';
import { RodadasComponent } from './rodadas/rodadas.component';



@NgModule({
  declarations: [
    TabelaComponent,
    ArtilhariaComponent,
    FasesComponent,
    RodadasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CampeonatoBrasileiroSerieAModule { }
