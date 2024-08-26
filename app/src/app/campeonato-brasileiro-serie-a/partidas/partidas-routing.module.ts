import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PartidasComponent} from "./partidas.component";

const routes: Routes = [
  {
    path: '', component: PartidasComponent, children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PartidasRoutingModule {}
