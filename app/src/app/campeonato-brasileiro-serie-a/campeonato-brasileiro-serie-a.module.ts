import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaComponent } from './tabela/tabela.component';
import { ArtilhariaComponent } from './artilharia/artilharia.component';
import { FasesComponent } from './fases/fases.component';
import { PartidasAoVivoComponent } from './partidas-ao-vivo/partidas-ao-vivo.component';
import { PartidasComponent } from './partidas/partidas.component';



@NgModule({
  declarations: [
    TabelaComponent,
    ArtilhariaComponent,
    FasesComponent,
    PartidasAoVivoComponent,
    PartidasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CampeonatoBrasileiroSerieAModule { }
