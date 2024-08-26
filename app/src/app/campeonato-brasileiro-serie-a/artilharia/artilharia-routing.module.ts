import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtilhariaComponent} from "./artilharia.component";

const routes: Routes = [
  {
    path: '', component: ArtilhariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ArtilhariaRoutingModule {

}
