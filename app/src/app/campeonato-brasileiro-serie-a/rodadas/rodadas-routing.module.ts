import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {RodadasComponent} from "./rodadas.component";

const routes: Routes = [
  {
    path: '', component: RodadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RodadasRoutingModule {

}
