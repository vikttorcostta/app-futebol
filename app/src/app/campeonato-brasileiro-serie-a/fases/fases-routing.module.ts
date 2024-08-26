import { RouterModule, Routes } from '@angular/router';
import {FasesComponent} from "./fases.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '', component: FasesComponent, children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FasesRoutingModule {

}
