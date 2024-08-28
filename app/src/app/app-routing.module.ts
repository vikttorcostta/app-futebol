import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from "./layout/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '', component: DefaultLayoutComponent, children: [
      {path: '', loadChildren: () => import('./campeonato-brasileiro-serie-a/partidas/partidas.module').then(m => m.PartidasModule)},
      {path:'tabela', loadChildren: () => import('./campeonato-brasileiro-serie-a/tabela/tabela.module').then(m => m.TabelaModule)},
      {path:'rodadas', loadChildren: () => import('./campeonato-brasileiro-serie-a/rodadas/rodadas.module').then(m => m.RodadasModule)},
      {path: 'fases', loadChildren: () => import('./campeonato-brasileiro-serie-a/fases/fases.module').then(m => m.FasesModule)},
      {path: 'artilharia', loadChildren: () => import('./campeonato-brasileiro-serie-a/artilharia/artilharia.module').then(m => m.ArtilhariaModule)},
      {path: 'partidasAoVivo', loadChildren: () => import('./campeonato-brasileiro-serie-a/partidas-ao-vivo/partidas-ao-vivo.module').then(m => m.PartidasAoVivoModule)}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
