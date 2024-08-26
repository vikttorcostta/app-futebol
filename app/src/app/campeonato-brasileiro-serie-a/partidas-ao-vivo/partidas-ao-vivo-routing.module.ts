import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PartidasAoVivoComponent} from "./partidas-ao-vivo.component";

const routes: Routes = [
  {
    path: '', component: PartidasAoVivoComponent, children: [

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PartidasAoVivoComponentModule {

}
